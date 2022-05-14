import React from "react";
import "../index.css"


export default function(props){
    return(
    <div className="col-sm-4 thumb">
    <h1 className="prodTitle">{props.productName}</h1>
            <img className="prod-img" src={props.src} alt=""></img>
    </div>
    )
}