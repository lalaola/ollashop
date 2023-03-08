import React from 'react';

const Card = (props) => {
    return (
        <div class="card mt-5" >
            <div class="row g-0">
                <div class="col-md-5">
                    <img src={props.image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7  ps-5 d-flex align-items-center">
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <h1 class="card-text mt-3 text-danger">Rp. {props.price}</h1>
                        <p>SKU :   {props.sku} </p>
                        <div className='card-desc col-10 col-md-8 py-2'>
                            <h3 >Detail Product</h3>
                            {props.descrption}
                        </div>
                        <button disabled className='btn btn-danger'>Cheack Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
