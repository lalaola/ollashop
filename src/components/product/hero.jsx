import React from 'react';
import foto from '../../asset/image/banner.png'
const Hero = () => {
    return (
        <div className='banner-product'>
            <div className="wrap-content d-flex col-8 mx-auto ">
                <div className="text col-8 ">
                    <h2>Grab ALL Items Discount Up to</h2>
                    <h1>50%</h1>
                    <h2>Don’t Miss It</h2>
                </div>
                <div className="foto col-4   d-flex">
                    <div className="wrap-foto col-9">
                        <img className='img-fluid' src={foto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
