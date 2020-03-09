import React from "react";
import './style.css';

function Card(props) {
    return (
            <div className="card icard" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top" height="100px" alt={props.alt} />
                <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
    )
};

export default Card;