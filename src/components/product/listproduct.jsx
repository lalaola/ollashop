import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fatchDataProduct, fatchDataProductBaru } from '../../redux/action/productAction';
import Card from '../card';

const Listproduct = () => {
    const dispatch = useDispatch()
    const { getProduct, getProductLoading, keyWordCari, getProductBaru } = useSelector((state) => state.ProductReducer)
    const [newProduct, setNewProduct] = useState(getProduct);
    const [buttonMore, setButtonMore] = useState(false);

    const handleMore = () => {
        setNewProduct([...getProduct,...getProductBaru])
        setButtonMore(true)
    }
    useEffect(() => {
        dispatch(fatchDataProduct())
        dispatch(fatchDataProductBaru())
    }, [dispatch]);
    
    useEffect(() => {
        setNewProduct(getProduct)
    }, [getProduct]);

    return (
        <div className='list-product col-10 mx-auto mt-4'>
            <h3>Product for you !</h3>
            <div className="wrap-product mt-4 d-flex flex-wrap ">
                {
                    newProduct ? newProduct.filter(product => product.name.toLowerCase().includes(keyWordCari) || product.sku.toLowerCase().includes(keyWordCari)).map((product, index) => {
                        return (
                            <Card shortDesc={product.short_description} sku={product.sku} image={product.images[0].src} id={product.id} key={index} title={product.name} price={product.price} />
                        );
                    })
                        : getProductLoading ? <p>Loading</p> : <p>Data tidak tersedia</p>
                }
            </div>
            {
               buttonMore ?  <button disabled className='btn btn-secondary'>Load More</button>
                : <button onClick={handleMore} className='btn btn-primary'>Load More</button>
            }

        </div>
    );
}

export default Listproduct;
