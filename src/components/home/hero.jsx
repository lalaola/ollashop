import React from 'react';
import foto from '../../asset/image/foto.png'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const 
Hero = () => {
    return (
        <motion.div
        initial={{opacity : 0 }}
        animate={{ opacity : 1}}
        className='hero d-flex col-10 mx-auto justify-content-between align-items-center'>
            <div className="text col-md-6 ">
                <h3>New Era</h3>
                <h1>Start Selling <br /> on a Website</h1>
                <p>Lorem loremLorem loremLorem  lorem Lorem loremLorem lorem Lorem lorem Lorem loremLorem lorem Lorem lorem </p>
                <NavLink to="/product" className='btn btn-primary'>Telusuri sekarang !</NavLink>
            </div>
            <motion.div 
            initial={{x: 200 }}
            animate={{x: 0 }}
            transition={{duration:1}}
            className="hero-image col-5 col-md-5">
                <img className='img-fluid' src={foto} alt="hero" />
            </motion.div>
        </motion.div>
    );
}

export default Hero;
