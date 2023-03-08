import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import foto from '../../asset/image/banner.png'
import { searchProduct } from '../../redux/action/productAction';

const Hero = () => {
    const {  keyWordCari } = useSelector((state) => state.ProductReducer)
    const dispatch = useDispatch()
    
    const handleChangeSearch = (e) =>{
        let search = e.target.value
        console.log("komponen did mount,",search) 
      dispatch(searchProduct(search)) 
    }

    return (
        <div className='banner-product'>
            <div className="wrap-content d-flex col-10 col-md-8 mx-auto ">
                <div className="text col-7 col-md-8 ">
                    <h2>Grab ALL Items Discount Up to</h2>
                    <h1>50%</h1>
                    <h2>Don’t Miss It</h2>
                    <div className="col-10">
                        <input 
                        onChange={handleChangeSearch} className="form-control  form-control-lg " type="text" placeholder="Find your product" ></input>
                    </div>
                </div>
                <div className="foto col-5 col-md-4   d-flex">
                    <div className="wrap-foto col-10">
                        <img className='img-fluid' src={foto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
