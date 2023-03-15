import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcumbs = () => {
    return (
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb d-flex">
                    <li className="breadcrumb-item"><NavLink className=" text-white" to="/">Home</NavLink></li>
                    <li className="breadcrumb-item"><NavLink className=" text-white"  to="/product">List Product </NavLink></li>
                    <li className="breadcrumb-item active " aria-current="page">Product Detail</li>
                </ol>
            </nav>
    );
}

export default Breadcumbs;
