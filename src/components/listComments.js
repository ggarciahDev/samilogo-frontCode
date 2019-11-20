import React from 'react';
import BarComments from './barComments'

class ListComments extends Component {
  constructor(args){
    super(args)

    this.state = {
      listC 
    }
  }

  addToList(product){
    var joined = this.state.listC.concat(product);
    this.setState({ listC: joined })
  }

  getProducts(){
    fetch('http://localhost:3000/api/products/'+args)
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
            {()=>this.getProducts()}
              {this.state.listC.map((product,index) => {
                product.reviews.map((review,index) =>{
                  reviews_[index] = review;
                })
                title=product.title;
                description=product.description;
                })}
            <segment className="ListComments">
              <br/>
              <br/>
              <h1>{title}</h1>
              <br/>
              <br/>
              <BarComments revIDS ={ reviews_ }/>
            </segment>
        </div>
      )
    }
  }

   
  export default ListComments