import React, {Component}  from 'react';
import BarComments from './barComments'

class ListComments extends Component {
  constructor(props){
    super(props)

    this.state = {
      listC: []
    }
  }

  addToList(product){
    var joined = this.state.listC.concat(product);
    this.setState({ listC: joined })
  }

  getProducts(){
    fetch('http://localhost:3000/api/products/'+this.props)
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        this.addToList( product );
      });
    });

    console.log(this.state.listC);
  }
    render () {
      var title;
      var reviews_ = [] ;
      return (
          
        <div className="App">
          <segment className="BackColor">
            {()=>this.getProducts()}
              {this.state.listC.map((product,index) => {
                product.reviews.map((review,index) =>{
                  reviews_[index] = review;
                })
                title=product.title;
                })}
            <segment>
              <br/>
              <br/>
              <h1>{title}</h1>
              <br/>
              <br/>
              <BarComments listReviews ={ reviews_ }/>
            </segment>
            </segment>
        </div>
      )
    }
  }

   
  export default ListComments