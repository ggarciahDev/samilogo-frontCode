import React, { Component } from 'react';
import BarComments from './barComments'
import auth from './auth';

class ListComments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product : null
    }
  }
  componentDidMount() {
    console.log(auth.currentProductID)
    fetch('http://localhost:3000/api/products/' + auth.currentProductID)
      .then(response => response.json())
      .then(products => this.setState({ product: products }))
  }
  render() {
    console.log(this.product)
    return (
      <div className="App">
        <segment className="BackColor">
        <segment className="BackColor">
          <br />
          <h1>{this.product.title}</h1>
          <br />
        </segment>
          <BarComments listReviews={this.product.reviews} />
        </segment>
      </div>
      )
  }
}


export default ListComments