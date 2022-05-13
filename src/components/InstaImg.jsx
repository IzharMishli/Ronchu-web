import React,{useState} from "react";
import "../styles/insta.css"


export default function(props){
    
    return(
        
            <div className="col-lg-3 col-md-4 col-sm-6">
            <a href={props.link}>
                <img src={props.imgsrc} className="insta-img"></img>
                </a>
            </div>
    )
}