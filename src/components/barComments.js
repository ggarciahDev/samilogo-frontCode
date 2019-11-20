import React from 'react';
import CommentCard from './commentCard';

function BarComments({ listReviews }){
    var cont = 0;    
    return (
        <section>
        {
            listReviews.map((review,index) =>{
                <CommentCard cUser = {review.user} cComment={review.comment}/>
              })
        }
        </section>
    ); 
}

export default BarComments