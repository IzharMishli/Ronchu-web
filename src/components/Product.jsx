import React from "react";
import "../index.css"


export default function(props){
    return(
    <div className="col-lg-4 col-md-4 col-sm-4 thumb">
    <h1 className="prodTitle">{props.productName}</h1>
            <img className="prod-img" src={props.src} alt=""></img>
    </div>
    )
}