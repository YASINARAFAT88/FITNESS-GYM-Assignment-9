import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='link-style'>
           <Link className='link' to='/home'>Home</Link>
           <Link className='link' to='/reviews'>Reviews</Link>
           <Link className='link' to='/dashBoard'>DashBoard</Link>
           <Link className='link' to='/blogs'>Blogs</Link>
           <Link className='link' to='/abouts'>Abouts</Link>
        </div>
    );
};

export default Header;