import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import logo from './gym-benner.jpg'
import { useNavigate } from 'react-router-dom';
import { HooksContext } from '../../App';


const Home = () => {
    const naviGate = useNavigate()
    const reviews = useContext(HooksContext)
    
    return (
        <>
            <div className='home-container'>

                <div className="home-detail">
                    <h1>Get to get good Health.<br /> Must Go gym Regularly!!</h1>
                    <p className='detail-text'>Are You Fit. Then You are a Hit. A Good helthful life Lead Do this then Work hard and Smartly or got to  gym Regularly First of all And Second Work Eight Hours Sleep and junk food not Allowd but week a one day consedareble!!</p>
                    <button>See Detail</button>
                    <u></u>
                </div>
                <div className='main-img'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <hr />
            {/* Review Section  */}
            <div>
                <h1 className='review-title'>Customar Review</h1>
                <section className='for-flex'>
                {
                    reviews.slice(0, 3).map(review => 
                                <div className='review-carts'>
                                    <div>
                                        <h3>Name: {review.name}</h3>
                                        <p>Review: {review.comments}</p>
                                        <p>Rating: <small>{review.rating}</small></p>
                                    </div>
                                </div>
                    )                      
                }
                </section>
                <div className='btn-div'>
                    <button onClick={()=> naviGate('/reviews')} className='review-btn'>See All Review</button>
                </div>
            </div>
        </>
    );
};

export default Home;

