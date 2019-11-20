import React, {Component} from 'react';
import TableProducts from './tableProducts';

class ListProducts extends Component {
  constructor(args){
    super(args)

    this.state = {
      print: false,
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
      var print = false;
      return (
        <div className="App">
            <segment className="BackColor">
              <h1>Productos Online!! ^-^</h1>
              <br/>
              {()=>this.getProducts()}
              {this.state.listP.map((product,index) => {
                title[index]=product.title;
                description[index]=product.description;
                })}
              <TableProducts titleP={title} descriptionP={description}/>
            </segment>
        </div>
      )
    }
  }

   
  export default ListProducts

