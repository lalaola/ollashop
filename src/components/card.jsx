import React from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser'

const Card = (props) => {
    return (
        <NavLink to={`/product/detail/${props.id}`} className="card mb-3  mx-1" >
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>SKU {props.sku}</p>
                    <p className="card-text">{ parse(props.shortDesc)}</p>
                    <p>Price {props.price}</p>
                </div>
        </NavLink>
    );
}

export default Card;
