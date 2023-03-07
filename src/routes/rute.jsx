import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import Homepage from '../pages/homepage';
import Product from '../pages/product';


const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/product" element={<Product/>}/>
            {/* <Route path="/home" element={<Index/>}/>
            <Route path="/list" element={<Job/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/detail/:id" element={<Detail/>}/> */}
        </Routes>
    );
}

export default Rute;
