import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailProduct } from '../../redux/action/productAction';
import parse from 'html-react-parser'


const Index = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { getProductDetail, getProductDetailLoading } = useSelector((state) => state.ProductReducer)
    
    const newDesc = getProductDetail.description

    useEffect(() => {
        dispatch(detailProduct(id))
    }, [dispatch]);

    return (
        <div className='mt-4 container'>
            {
                getProductDetail ?
                    <div>
                        <p>Nama Barang : {getProductDetail.name}</p>
                        <p>Ini Detail Project : {parse(newDesc)} </p>
                        <p>harga barang: {getProductDetail.price}</p>
                        <p>sku : {getProductDetail.sku}</p>
                        <div className="col-4">
                            <img className='img-fluid' src={getProductDetail.images[0].src} alt="" />
                        </div>
                    </div>
                    : getProductDetailLoading ? 'loading...' : 'salah'
            }

        </div>
    );
}

export default Index;
