import React from 'react';
import Promo from '../promo';
import Hero from './hero';
import Listproduct from './listproduct';

const Index = () => {
    return (
        <div className='product'>
            <Hero/>

            <Promo/>
            <Listproduct/>
        </div>
    );
}

export default Index;
