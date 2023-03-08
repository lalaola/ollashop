import React from 'react';
import foto from '../asset/image/foto.png'
import Hero from '../components/home/hero';
import Navbar from '../components/navbar/navbar';
const Homepage = () => {
    return (
        <div className='homepage '>
            <Navbar/>
            <Hero/>
        </div>
    );
}

export default Homepage;
