import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import DetailProduct from '../pages/detailProduct';
import Homepage from '../pages/homepage';
import Product from '../pages/product';


const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/detail/:id" element={<DetailProduct/>}/>

        </Routes>
    );
}

export default Rute;
