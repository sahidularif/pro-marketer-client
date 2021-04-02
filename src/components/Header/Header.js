import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div class="header">
            <Link to="/"><a href="#default" class="logo">BIO-XIN</a></Link>
            <div class="header-right">
                <Link to="/"> <a class="" href="#home">Home</a></Link>
                <Link to="/orders"> <a href="#orders">Orders</a></Link>
                <Link to="/adminPanel"> <a href="#admin">Admin</a></Link>
                <Link to="/deals"> <a href="#deals">Deals</a></Link>
                {
                    loggedInUser ?
                      <Link to="/"> <a href="#deals"> {loggedInUser.name} <img src={loggedInUser.picture} alt=""  /></a> </Link>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default Header;