import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import DetailProduct from '../pages/detailProduct';
import Product from '../pages/product';


const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/detail/:id" element={<DetailProduct/>}/>
        </Routes>
    );
}

export default Rute;
