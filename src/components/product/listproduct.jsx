import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fatchDataProduct } from '../../redux/action/productAction';
import Card from '../card';

const Listproduct = () => {
    const dispatch = useDispatch()
    const { getProduct,getProductLoading } = useSelector((state) => state.ProductReducer)

    useEffect(() => {
        dispatch(fatchDataProduct())
    }, [dispatch]);
    return (
        <div className='list-product col-10 mx-auto mt-4'>
            <h3>Product for you !</h3>
            <div className="wrap-product mt-4 d-flex flex-wrap ">
            {
                    getProduct ?
                        getProduct.map((order, index) => {
                            return (
                                <Card key={index} title={order.name} image={order.images[0].src} price={order.price} />
                            );
                        })
                        : getProductLoading ? <p>Loading</p> : <p>Data tidak tersedia</p>

            }
            </div>
            
        </div>
    );
}

export default Listproduct;
