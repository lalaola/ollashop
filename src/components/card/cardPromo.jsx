import React, { useState } from 'react';

const CardPromo = (props) => {
    const [code, setCode] = useState(props.code);
    const [toolTip, setToolTip] = useState("Copy to clipboard");

    const copy = () => {
        navigator.clipboard.writeText(code);
        setToolTip(`Copied ${code}`)
    }
    return (
        <div>
            <div class="card me-4 " >
                <div class="card-body">
                    <div class="card-title">
                        <div className="title d-flex justify-content-between">
                            <h5> {props.title} </h5>
                            <div className="tool">
                                <span class="tooltiptext" id="myTooltip">{toolTip}</span>
                                <button onClick={copy} className='btn btn-warning'> {props.btn}</button>

                            </div>
                        </div>
                    </div>

                    <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget </p>
                </div>
            </div>
        </div>
    );
}

export default CardPromo;
