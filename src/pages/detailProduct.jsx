import React from 'react';
import { useSelector } from 'react-redux';
import Index from '../components/detailComponent';
import Navbar from '../components/navbar/navbar';

const DetailProduct = () => {
    const {order } = useSelector((state) => state.ProductReducer)
    return (
        <div className='detail'>
            <Navbar/>
            <Index/>
        </div>
    );
}

export default DetailProduct;
