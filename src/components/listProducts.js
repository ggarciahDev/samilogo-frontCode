import React, {Component} from 'react';
import TableProducts from './tableProducts';
import Button from 'react-bootstrap/Button';

class ListProducts extends Component {
  constructor(args){
    super(args)

    this.state = {
      listP : []
    }
  }

  addToList(product){
    var joined = this.state.listP.concat(product);
    this.setState({ listP: joined })
  }

  getProducts(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {

        //listP.push( String(product.title) );
        this.addToList( product );

      });
    });

    console.log(this.state.listP);
  }
    render () {
      var title=[];
      var description =[];
      var id=[];
      this.getProducts();
      this.state.listP.map((product,index) => {
        title[index]=product.title;
        description[index]=product.description;
        id[index]=product._id;
        });
      return (
        <div className="App">
            <segment className="BackColor">
              <br/>
              <br/>
              <h1>Productos Online!! ^-^</h1>
              <br/>
              <br/>
              
              
              <TableProducts titleP={title} descriptionP={description} _id={id}/>
            </segment>
        </div>
      )
    }
  }

   
  export default ListProducts

