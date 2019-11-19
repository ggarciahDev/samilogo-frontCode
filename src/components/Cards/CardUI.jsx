import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import img1 from '../../images/carro1.jpg';

    const ProductCard = props =>{
        var product = {
            nombre: 'Nombre del producto',
            Descripcion: 'Descripcion del producto',
            imagen : './images/carro1.jpg',
            getNombre: function() {
              return this.nombre;
            },
            getDescripcion: function() {
                return this.Descripcion;
            },
            getImagen: function() {
                return this.imagen;
            }
        };
        return (
            <section>
              <img src={img1} alt='image1' width="300px" height ="150px"/>
              <section width = "300px">
              <h6 align = "center" >Nombre del producto</h6><p> Precio : 300</p>
              </section>
              <section width = "300px">
              <p align = "center">Descripcion del producto</p>
              </section>
            </section>
        )
      }


export default (ProductCard);

/**
        <div className="card text-center">
            <img src={img1} alt='image1' className='card-img-top'/>
            <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    Description of the product and more...
                </p>    
            </div>
        </div>







 
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt='image1' className='card-img-top'/>
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    Description of the product and more...
                </p>
            </div>
        </div> 
        
*/