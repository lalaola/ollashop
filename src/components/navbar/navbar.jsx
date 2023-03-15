import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/image/logo.png'
const Navbar = () => {
    return (
        <div className='navbar col-10 mx-auto d-flex justify-content-between align-items-center'>
            <div className="icon text-white col-4 col-md-2">
                <h2>Ollashop</h2>
            </div>
            <div className="menu d-flex col-10 col-md-5 justify-content-between ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/product">Shop</NavLink>
                <NavLink to="/" className="px-3">|</NavLink>
                <NavLink to="/product" className="btn col-4">Login</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
