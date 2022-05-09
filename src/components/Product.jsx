import React from "react";
import "../index.css"


export default function(props){
    return(
    <div className="col-lg-4 col-md-4 thumb">
    <h1 className="prodTitle">{props.productName}</h1>
        <a class="thumbnail" href="#">
            <img className="prod-img" src={props.src} alt=""></img>
        </a>
    </div>
    )
}