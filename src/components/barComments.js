import React from 'react';
import CommentCard from './commentCard';

function BarComments({ listReviews }) {

    return (
        <div >
            
            <br/>
            <h2>COMENTARIOS</h2>
            <br />
            {
                listReviews.map((review, index) => {
                    return <CommentCard cUser={review.user} cComment={review.comment} />
                })
            }
            
        </div>
    );
}

export default BarComments
/*
*/