import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div class="header">
            <Link to="/"><a href="#default" class="logo">BIOXIN COSMETICS</a></Link>
            <div class="header-right">
                <Link to="/orders"> <a class="active" href="#home">Orders</a></Link>
                <Link to="/adminPanel"> <a href="#contact">Admin</a></Link>
                <Link to="/deals"> <a href="#about">Deals</a></Link>
            </div>
        </div>
    );
};

export default Header;