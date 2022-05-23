import React from "react";


export default function(props){
    return(
    <div className="col-sm-4 thumb">
    <h3 className="prodTitle">{props.productName}</h3>
            <img className="prod-img" src={props.src} alt=""></img>
    </div>
    )
}