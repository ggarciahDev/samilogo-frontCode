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
      var titleP=[];
      var descriptionP =[];
      return (
        <div className="App">
            <segment className="BackColor">
              <h1>Productos Online!! ^-^</h1>
              <br/>
              <Button onClick={()=>this.getProducts()} variant="primary" type="submit">
                Pruebas
              </Button>
              {this.state.listP.map((product,index) => {
                titleP[index]=product.title;
                descriptionP[index]=product.description;
                })}
                <table align = "center">
                                <tr>
                                <td><ProductCard pTitle={titleP[0]} pDescription={descriptionP[0]}/></td>
                                <td><ProductCard pTitle={titleP[1]} pDescription={descriptionP[1]}/></td>
                                <td><ProductCard pTitle={titleP[2]} pDescription={descriptionP[1]}/></td>
                                <td><ProductCard pTitle={titleP[3]} pDescription={descriptionP[1]}/></td>
                              </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[4]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[5]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[6]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[7]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[8]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[9]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[10]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[11]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[12]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[13]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[14]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[15]} pDescription={descriptionP[1]}/></td>
                                  
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[16]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[17]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[18]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[19]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[20]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[21]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[22]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[23]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[24]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[25]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[26]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[27]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[28]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[29]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[30]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[31]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[32]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[33]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[34]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[35]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[36]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[37]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[38]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[39]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[40]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[41]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[42]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[43]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[44]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[45]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[46]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[47]} pDescription={descriptionP[1]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[48]} pDescription={descriptionP[1]}/></td>
                                  <td><ProductCard pTitle={titleP[49]} pDescription={descriptionP[1]}/></td>
                                </tr>
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