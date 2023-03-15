import React from 'react';

const CardPromo = (props) => {
    return (
        <div>
            <div class="card me-4 " >
                <div class="card-body">
                    <div class="card-title">
                        <div className="title d-flex justify-content-between">
                            <h5> {props.title} </h5>
                            <button className='btn btn-warning'> {props.btn}</button>
                        </div>
                    </div>
                    <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget </p>
                </div>
            </div>
        </div>
    );
}

export default CardPromo;
