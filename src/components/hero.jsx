import React from 'react';
import foto from '../asset/image/foto.png'
const 
Hero = () => {
    return (
        <div className='hero d-flex col-10 mx-auto justify-content-between align-items-center'>
            <div className="text col-md-6 ">
                <h3>New Era</h3>
                <h1>Start Selling <br /> on a Website</h1>
                <p>Lorem loremLorem loremLorem  lorem Lorem loremLorem lorem Lorem lorem Lorem loremLorem lorem Lorem lorem </p>
                <button className='btn btn-primary'>Telusuri sekarang !</button>
            </div>
            <div className="hero-image col-5 col-md-5">
                <img className='img-fluid' src={foto} alt="hero" />
            </div>
        </div>
    );
}

export default Hero;
