import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../asset/image/logo.png'
const Navbar = () => {
    return (
        <div className='navbar col-10 mx-auto d-flex justify-content-between'>
            <div className="icon col-4 col-md-2">
                <img className='img-fluid' src={logo} alt="logo shop" />
            </div>
            <div className="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/" className="px-4">|</NavLink>
                <NavLink to="/product">Daftar Menu</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
