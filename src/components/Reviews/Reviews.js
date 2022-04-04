import React, { useContext } from 'react';
import './Reviews.css'
import { HooksContext } from '../../App';

const Reviews = () => {
    const userReview = useContext(HooksContext)

    console.log(userReview)
    return (
        <div>
            <h2 className='review-title'>Our Customar Reviews({userReview.length})</h2>

            <section className='for-flex'>
                {
                    userReview.map(review => 
                        <div className='all-review'><h2>Name : {review.name}</h2>
                        <p>{review.comments}</p>
                        <p>Rating: <small>{review.rating}</small></p>
                    </div>
                    )
        
                }
            </section>

        </div>
    );
};

export default Reviews;