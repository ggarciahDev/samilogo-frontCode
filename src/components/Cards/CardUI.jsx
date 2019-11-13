import React from 'react';
import img1 from '../../images/carro1.jpg';

const Card = props =>{
    return(
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
    );
}

export default Card;

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