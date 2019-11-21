import React from 'react';
import CommentCard from './commentCard';

function BarComments({ listReviews }) {

    return (
        <div >
            
            <br/>
            <h2>COMENTARIOS</h2>
            <br/>

            
        </div>
    );
}

export default BarComments
/*
            {
                listReviews.map((review, index) => {
                    return <CommentCard cUser={review.user} cComment={review.comment} />
                })
            }
*/