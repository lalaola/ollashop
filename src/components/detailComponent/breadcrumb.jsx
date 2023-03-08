import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcumbs = () => {
    return (
            <nav aria-label="breadcrumb  ">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li className="breadcrumb-item"><NavLink to="/product">List Product </NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                </ol>
            </nav>
    );
}

export default Breadcumbs;
