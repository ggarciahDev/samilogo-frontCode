import React, { Component } from 'react';
import CommentCard from './commentCard';
import auth from './auth';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

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
        axios.put("http://localhost:3000/api/products/" + auth.currentProductID, {
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
        fetch(`http://localhost:3000/api/products/${this.props.match.params.id}`)
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
/*

                    {auth.selectedProduct.reviews.map((review,index) => {
                        return <CommentCard cUser={review.user} cComment={review.comment} />
                    })}

                    <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"Primer Comentario Producto 1"} />
                    <CommentCard cUser={"5dce17c32e64e0410c97a659"} cComment={"Otro comentario"} />
                    <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"Mi mensaje es muy importante brpw"} />
                    <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"este es mi mensaje carajo}"} />
                    <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"este es el p1"} />






var user1 =this.state.product.reviews;
    user1.map((rev,index) =>{
      usrs[index]= rev.user;
    });


<CommentCard cUser={this.state.product.reviews[0].user} cComment={this.state.product.reviews[0].comment}  />
<CommentCard cUser={this.state.product.reviews[1].user} cComment={this.state.product.reviews[1].comment}  />



var rev = [];
    var usr = [];
    var com = [];
    var cont = 0;
    rev = this.state.product.reviews;
    rev.forEach(element => {
      usr[cont] = element.user;
      com[cont] = element.comment;
      cont++;
    });
 var users =[];
    var comments =[];
    this.state.product.reviews.map((review,index) => {
        users[index] = review.user;
        comments[index] = review.comment;
      });
{
          this.state.product.forEach((reviews) => {
            return <CommentCard cUser={reviews[2]} cComment={reviews[0]} />
          })
          }
*/