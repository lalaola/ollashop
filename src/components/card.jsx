import React from 'react';

const Card = (props) => {
    return (
        <div class="card mb-3" >
            <img src={props.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>Price {props.price}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}

export default Card;