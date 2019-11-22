import React, { Component } from 'react';
import CommentCard from './commentCard';
import auth from './auth';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListComments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errorText: "",
            title: "",
            description: "",
            product: auth.selectedProduct
        }
        this.refreshInformation = this.refreshInformation.bind(this);
    }

    setComment = (e) => {
        auth.setComment(e.target.value);
    }

    sendComment() {
        axios.put("http://35.174.199.129:5000/api/products/" + auth.currentProductID, {
            review: {
                user: auth.user._id,
                comment: auth.comment
            }
        })
            .then(res => {
                console.log(res.data);
            })

        auth.resetComment();
        auth.resetSelectedProduct();
        // PUT  localhost:puerto/api/products/:id
    }

    refreshInformation() {
        console.log(auth.selectedProduct.title)

        this.setState({
            product: auth.selectedProduct
        })
    }

    componentDidMount() {
        fetch(`http://35.174.199.129:5000/api/products/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(pro => {

                auth.setSelectedProduct(pro);
            })
    }

    resetSelectedProduct() {
        auth.resetSelectedProduct();
    }

    render() {
        return (
            <div className="App">
                <segment className="BackColor">
                    <Button onClick={this.refreshInformation}>
                        Cargar información
                        </Button>
                    <br />
                    <h1>{auth.selectedProduct.title}</h1>
                    <p>{auth.selectedProduct.description}</p>

                    {auth.selectedProduct.reviews.map((review, index) => {
                        return <CommentCard cUser={review.user} cComment={review.comment} />
                    })}

                    <br />

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Escribe tu comentario</label>
                        <textarea onChange={this.setComment} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>

                        <Link className="Font-Link" to={"/products"}>
                            <Button onClick={this.sendComment}>
                                Comentar
                            </Button>
                        </Link>

                    </div>
                    <div class="form-group">
                        <Link className="Font-Link" to={"/products"}>
                            <Button onClick={this.resetSelectedProduct} variant="primary">Go back</Button>
                        </Link>

                    </div>
                </segment>
            </div>
        )
    }

}

export default ListComments
