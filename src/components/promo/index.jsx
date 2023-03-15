import React from 'react';
import CardPromo from '../card/cardPromo';

const Promo = () => {
    return (
        <div className='promo justify-content-between col-10 mx-auto mt-4 d-flex p-5'>
            <CardPromo title="free Shipping" btn="Claim" code="FREESH"/>
            <CardPromo title="Promo love" btn="Claim" code="LOVECD"/>
            <CardPromo title="Promo b'day" btn="Claim" code="BDAYCD"/>
            <CardPromo title="Voucher Gift" btn="Claim"  code="GIFTCD"/>
        </div>
    );
}

export default Promo;
