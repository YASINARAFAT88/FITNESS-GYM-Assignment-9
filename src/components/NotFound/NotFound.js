import React from 'react';
import logo  from './not-found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='not-found-img'>
                <img src={logo} alt="" />
            </div>
            <p className='instruction'>Go to Home page</p>
            
        </div>
    );
};

export default NotFound;