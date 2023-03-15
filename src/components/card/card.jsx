import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

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
            title: `${props.title} Pesanan Diterima!`
          })    
    }
    return (
        <NavLink to={`/product/detail/${props.id}`} className="card mb-3  mx-1" >
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>SKU {props.sku}</p>
                    <div className="beli d-flex justify-content-between">
                    <p>Price {props.price} </p>
                    <p onClick={handleOrder}>Beli</p>
                    </div>
                </div>
        </NavLink>
    );
}

export default Card;
