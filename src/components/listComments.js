import React, { Component } from 'react';
import BarComments from './barComments'
import auth from './auth';

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
        this.setState({product : pro})
        console.log(this.state)
        console.log(pro)
      }
      )
      
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <segment className="BackColor">
          <segment className="BackColor">
          <h1>{this.state.product.title}</h1>
          <p>{this.state.product.description}</p>
          </segment>
          <BarComments listReviews={this.state.product.reviews} />
        </segment>
      </div>
    )
  }
}

export default ListComments