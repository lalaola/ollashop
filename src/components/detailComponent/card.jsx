import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

export const GET_ORDER = 'GET_ORDER'

const Card = (props) => {
    const handleOrder = () =>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Pesanan Diterima'
          })    
    }
    return (
        <div class="card mt-2" >
            <div class="row g-0">
                <div class="col-md-5 mx-auto detail-img">
                    <img src={props.image} class="rounded-start" alt="..." />
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
                        <button onClick={handleOrder} className='btn btn-danger'>Cheack Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
