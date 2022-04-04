import React, { useEffect, useState } from 'react';
import './Home.css'
import logo from './gym-benner.jpg'
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const naviGate = useNavigate()
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className='home-container'>

                <div className="home-detail">
                    <h1>Get to get good Health.<br /> Must Go gym Regularly!!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium animi magnam nostrum <br /> porro rem eligendi aperiam omnis provident nam eaque quam, dolore maxime deleniti nihil praesentium quasi, iste incidunt?</p>
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

