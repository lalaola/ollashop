import React from 'react';

const Card = (props) => {
    return (
        <div className="card mb-3  mx-1" >
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>Price {props.price}</p>
                </div>
        </div>
    );
}

export default Card;
