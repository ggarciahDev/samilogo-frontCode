import React, {Component} from 'react';
import ProductCard from './CardUI';
import { catchClause } from '@babel/types';

class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;