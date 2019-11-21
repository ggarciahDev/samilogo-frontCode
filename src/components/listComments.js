import React, {Component}  from 'react';
import BarComments from './barComments'
import auth from './auth';

class ListComments extends Component {
  constructor(props){
    super(props)

    this.state = {
      listC: [],
      title: "",
      reviews_: [] 
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    fetch('http://localhost:3000/api/products'+auth.currentProductID)
    .then(response => response.json())
    .then(products => this.setState({listP: products}))
  }
    render () {
      
      this.state.listC.map((product,index) => {
        this.title=product.title;
        product.reviews.map((review,index) =>{
          this.reviews_[index] = review;
        });
        });
      return (
        <br/>
        <br/>
        <h1>{this.title}</h1>
        <br/>
        <br/>
        <div className="App">
          <segment className="BackColor">
            <segment>
              <BarComments listReviews ={ this.reviews_ }/>
            </segment>
            </segment>
        </div>
      )
    }
  }

   
  export default ListComments