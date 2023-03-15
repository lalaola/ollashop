import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailProduct } from '../../redux/action/productAction';
import parse from 'html-react-parser'
import Card from './card';
import Breadcumbs from './breadcrumb';
import { motion } from 'framer-motion';


const Index = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { getProductDetail, getProductDetailLoading } = useSelector((state) => state.ProductReducer)
    
    const newDesc = getProductDetail.description

    useEffect(() => {
        dispatch(detailProduct(id))
    }, [dispatch]);

    return (
        <motion.div
        initial={{opacity : 0 }}
        animate={{ opacity : 1}} className='mt-3 container'>
            <Breadcumbs/>
            {
                getProductDetail ?
                <Card descrption={parse(newDesc)} sku=  {getProductDetail.price} name= {getProductDetail.name} image={getProductDetail.images[0].src}  price={getProductDetail.price}/>
                    : getProductDetailLoading ? 'loading...' : 'salah'
            }

        </motion.div>
    );
}

export default Index;
