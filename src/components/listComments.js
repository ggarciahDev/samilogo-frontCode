import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CommentCard from './commentCard';

class ListComments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {}
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
    
    return (
      <div className="App">
        <segment className="BackColor">
          <h1>{this.state.product.title}</h1>
          <p>{this.state.product.description}</p>
          <br />
          <br />
          <CommentCard cUser={this.state.product.reviews[0].user} cComment={this.state.product.reviews[0].comment}  />
          <CommentCard cUser={this.state.product.reviews[1].user} cComment={this.state.product.reviews[1].comment}  />
          <Button variant="primary">GO BACK</Button>
        </segment>
      </div>
    )
  }
}

export default ListComments
/*
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