import React, { Component } from 'react';
import BarComments from './barComments'
import auth from './auth';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ListComments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {}
        }
    }

    setComment = (e) => {
        auth.setComment(e.target.value);
    }

    sendComment(){
        axios.put("http://localhost:3000/api/products/"+auth.currentProductID,{
            review:{
                user: auth.user._id,
                comment: auth.comment
            }
        })
        .then(res => {
            console.log(res.data);
        })

        auth.resetComment();

        // PUT  localhost:puerto/api/products/:id
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/products/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(pro => {
                this.setState({ product: pro })
                console.log(this.state)
                console.log(pro)
            }
            )

    }



    render() {
        return (
            <div className="App">
                <segment className="BackColor">
                    <segment className="BackColor">
                        <h1>{this.state.product.title}</h1>
                        <p>{this.state.product.description}</p>
                    </segment>

                    <BarComments listReviews={this.state.product.reviews} />

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea onChange={this.setComment} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        <Button onClick={this.sendComment}>
                            Comentar
                        </Button>
                    </div>
                </segment>
            </div>
        )
    }
}

export default ListComments