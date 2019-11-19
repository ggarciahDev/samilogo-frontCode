import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Function from './function';
import ProductCard from './productCard';

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
      return (
        <div className="App">
            <segment className="BackColor">

              <h1>Productos Online!! ^-^</h1>
              <br/>
               
              <Button onClick={()=>this.getProducts()} variant="primary" type="submit">
                Pruebas
              </Button>

              <table align = "center" >

                {this.state.listP.map((product,index) => {
                    return <ProductCard pTitle={product.title} pDescription={product.description} />
                })}
                
              </table>

            </segment>
        </div>
      )
    }
  }
   
  export default ListProducts

/*
              <table align = "center" >
                <tr>
                  <td><ProductCard/></td>
                  <td><ProductCard/></td>
                  <td><ProductCard/></td>
                  <td><ProductCard/></td>
                </tr>
                <tr>
                  <td><ProductCard/></td>
                  <td><ProductCard/></td>
                  <td><ProductCard/></td>
                  <td><ProductCard/></td>
                </tr>
              </table>
*/


  //<Function  list={this.state.listP} />