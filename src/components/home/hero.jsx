import React from 'react';
import foto from '../../asset/image/home/guci.png'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import HomeSwipper from '../swipper/homeSwipper';
const
    Hero = () => {
        return (
            <div>
                <div className='ornamen text-white'>
                    <div className="col-6">
                        <p className='col-abu'></p>
                        <div className="d-flex">
                            <p className='col-orange'></p>
                            <p className='abu-kecil ms-2'></p>
                        </div>
                    </div>
                    <div className="col-6 col-kedua">
                        <p className='col-abu'></p>
                        <div className="d-flex">
                            <p className='abu-kecil me-2'></p>
                            <p className='col-orange'></p>
                        </div>
                    </div>
                </div>
                <div
                    className='hero d-flex col-10 mx-auto justify-content-center align-items-center'>
                    <HomeSwipper />

                    <h1 className='bg-text'>Olla Shop</h1>
                    {/* <div className="hero-image col-6 col-md-5 d-flex align-items-center flex-column ">
                    <img className='img-fluid' src={foto} alt="hero" />
                <h3>Guci bag Limited edition sasion 1</h3>
                <button className='btn btn-warning'>Buy Now</button>

                </div> */}
                </div>
            </div>
        );
    }

export default Hero;
