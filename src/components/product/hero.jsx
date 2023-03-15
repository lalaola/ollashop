import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import foto from '../../asset/image/home/guci.png'
import { searchProduct } from '../../redux/action/productAction';

const Hero = () => {
    const { keyWordCari } = useSelector((state) => state.ProductReducer)
    const dispatch = useDispatch()

    const handleChangeSearch = (e) => {
        let search = e.target.value
        console.log("komponen did mount,", search)
        dispatch(searchProduct(search))
    }

    return (
        <div className='banner-product '>
            <div className="wrap-content d-flex col-10 col-md-10 mx-auto ">
                <div className="text  col-md-7 ">
                    <h2>Buy & Sell anything in your City. <br />
                        Grab ALL Items <span>Discount</span> Up to</h2>
                    <div className="d-flex  mx-auto input align-items-center col-9">
                        <input
                            onChange={handleChangeSearch} className="form-control  form-control-lg me-3" type="text" placeholder="Find your product" ></input>
                        <h1>50%</h1>

                    </div>
                </div>
                <div className="foto col-5  col-md-4 d-flex ms-3">
                    <div className="wrap-foto col-11">
                        <img className='img-fluid' src={foto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
