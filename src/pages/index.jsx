import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import { fatchDataProduct } from '../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';

function Index() {
    const dispatch = useDispatch()
    const { getProduct,getProductLoading } = useSelector((state) => state.ProductReducer)

    useEffect(() => {
        dispatch(fatchDataProduct())
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {
                    getProduct ?
                        getProduct.map((order, index) => {
                            return (
                                <div key={index} >
                                    <p>Nama :{order.name} </p>
                                    <p>SKU : {order.sku}</p>
                                    <div className="col-6"><img className='img-fluid' src={order.images[0].src} alt="" /></div>
                                    <p>Price:  {order.price}</p>
                                    <p>Descripsi: {order.description}</p>
                                </div>
                            );
                        })
                        : getProductLoading ? <p>Loading</p> : <p>Data tidak tersedia</p>


                }
                <a
                    className="App-link mt-5"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Index;
