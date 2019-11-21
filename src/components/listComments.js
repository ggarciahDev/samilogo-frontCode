import React, { Component } from 'react';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import CommentCard from './commentCard';
=======
import BarComments from './barComments'
import auth from './auth';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
>>>>>>> 3203eea8be87e492e63e19c9f623c8cbf0970c51

class ListComments extends Component {
    constructor(props) {
        super(props)

<<<<<<< HEAD
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/products/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(pro => {
        this.setState({ product: pro })
      }
      )

  }
  render() {
    console.log(this.state.product);
    console.log(this.state.product.reviews);
    return (
      <div className="App">
        <segment className="BackColor">
          <h1>{this.state.product.title}</h1>
          <p>{this.state.product.description}</p>
          <br />
          <br />
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment = {"Primer Comentario Producto 1"}/>
          <CommentCard cUser={"5dce17c32e64e0410c97a659"} cComment = {"Otro comentario"}/>
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment = {"Mi mensaje es muy importante brpw"}/>
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment = {"este es mi mensaje carajo}"}/>
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment = {"este es el p1"}/>
          <Button variant="primary">GO BACK</Button>
        </segment>
      </div>
    )
  }
=======
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
>>>>>>> 3203eea8be87e492e63e19c9f623c8cbf0970c51
}

export default ListComments
/*
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