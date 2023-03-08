import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../config';
import { data } from '../../config/dummy';
import { fatchDataProduct } from '../../redux/action/productAction';
import Card from '../card';

const Listproduct = () => {
    const dispatch = useDispatch()
    const { getProduct, getProductLoading, keyWordCari } = useSelector((state) => state.ProductReducer)

    useEffect(() => {
        dispatch(fatchDataProduct())
        console.log(keyWordCari)
    }, []);

    // useEffect(() => {
    //     const unsicribe = () => {
    //         dispatch(fatchDataProduct())
    //     }

    //     return () => {
    //         unsicribe()
    //     };
    // }, []);

    console.log("lala= ", keyWordCari)

    return (
        <div className='list-product col-10 mx-auto mt-4'>
            <h3>Product for you !</h3>
            <div className="wrap-product mt-4 d-flex flex-wrap ">
                {
                    getProduct ? getProduct.filter(product => product.name.toLowerCase().includes(keyWordCari) || product.sku.toLowerCase().includes(keyWordCari)).map((product, index) => {
                        return (
                            <Card shortDesc={product.short_description} sku={product.sku} image={product.images[0].src} id={product.id} key={index} title={product.name} price={product.price} />
                        );
                    })
                        : getProductLoading ? <p>Loading</p> : <p>Data tidak tersedia</p>

                }
            </div>

        </div>
    );
}

export default Listproduct;
