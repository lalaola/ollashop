import React from 'react';
import CardPromo from '../card/cardPromo';

const Promo = () => {
    return (
        <div className='promo justify-content-between col-10 mx-auto mt-3 d-flex p-3'>
            <CardPromo title="free Shipping" btn="Claim"/>
            <CardPromo title="Promo love" btn="Claim"/>
            <CardPromo title="Promo b'day" btn="Claim"/>
            <CardPromo title="Voucher Gift" btn="Claim"/>
        </div>
    );
}

export default Promo;
