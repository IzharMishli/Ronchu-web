import React from "react";

export default function()
{
    return( 
        <header>
        <div className="navDiv">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img className="logo-img" src={require("../images/circleLogo2.png")} alt={" "}></img>
            <a class="navbar-brand" href="">Ronchu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" onClick={() => {
                    const anchor = document.querySelector('#contact-part');
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}>
                צור קשר <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link active" onClick={() => {
                    const anchor = document.querySelector('#products-part');
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}>
                מוצרים</a>
                <a class="nav-item nav-link active" onClick={() => {
                    const anchor = document.querySelector('#gallery-part');
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })}}>
                גלריה</a>
                </div>
            </div> 
            </nav>
        </div>
        <img className="big-logo-img" src={require("../images/logopic.png")} alt={"img not found"}/>
    </header>
    
        
    )
}