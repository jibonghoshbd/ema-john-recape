import React from 'react';
import './Header.css';
import logo from '../../images/ema-john.png';
const Header = () => {
    return (
        <div className='header-container'>
            <img className='img' src={logo} alt="" />
            <nav className='nav-area'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;