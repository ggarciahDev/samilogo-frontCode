import React from 'react';
import CommentCard from './commentCard';

function BarComments({ listReviews }) {

    return (
        <div >
            
            <br/>
                <h1>COMENTARIOS</h1>
                <br />
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