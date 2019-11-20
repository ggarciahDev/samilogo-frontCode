import React from 'react';

class ListComments extends Component {
  constructor(args){
    super(args)

    this.state = {
      listC : []
    }
  }

  addToList(product){
    var joined = this.state.listC.concat(product);
    this.setState({ listC: joined })
  }

  getProducts(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        this.addToList( product );
      });
    });

    console.log(this.state.listC);
  }
    render () {
      var title=[];
      var description =[];
      var id=[];
      return (
        <div className="App">
            <segment className="BackColor">
              <br/>
              <br/>
              <h1>Productos Online!! ^-^</h1>
              <br/>
              <br/>
              {()=>this.getProducts()}
              {this.state.listC.map((product,index) => {
                title[index]=product.title;
                description[index]=product.description;
                id[index]=product._id;
                })}
              <TableProducts titleP={title} descriptionP={description} _id={id}/>
            </segment>
        </div>
      )
    }
  }

   
  export default ListComments