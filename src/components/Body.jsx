import React from "react";
import "../index.css"
import Product from "./Product";
import InstagramFeed  from './Insta'
import '../styles/insta.css'
import InstaFeed from "./InstaFeed";



export default function()
{
    /*function createFeed(){
        var userFeed = new ins.Instafeed();
        userFeed.get = "user";
        userFeed.target="instafeed-container";
        userFeed.resolution = "low_resolution";
        userFeed.limit=3; 
        userFeed.accessToken="IGQVJXUEV1X3NzNlplbkpLT1dQNllmeGk5eTh5aHdseFBIOHJuMEtsVEJDTU4xT0FJWHVaQkFBbHI5X1FVQ1dxV0paeERsc0pKQmVXRmtfeVIxanFmVHpGMDFzdGw0RkcwOVVNeFhnYkwtTHFMY1dxdwZDZD";
        
        userFeed.run();


        <InstagramFeed 
            token="IGQVJVR2FsQzFYckFlQVRnd1RNb0ZAyVXNTVTFLTFo0ejdFRm5WZA2VrbWhacEUwTUdFbjZAUdjZALdFRlUnB0bGx2N1QwcDQ0U01kWm5MbEZADOXNLVDB3b19WVEtYMlVsY28tN0pXUTlpYkV0TmlieUtNRAZDZDy"  
            counter="50"/>
    }*/
    return( 
        <div className="bodyDiv">
            <section id="contact-part">
            <h2 className="contact-whatsapp">
            <a href="https://api.whatsapp.com/send?phone=972547320993&text=%D7%94%D7%99%D7%99%20:),%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%90%D7%9C%D7%99%D7%99%D7%9A%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8">
            <img className="contact-icon" src={require("../images/whatsapp.png")}/></a>
            צרו קשר
            <a href="https://www.instagram.com/ron_sharabi/"><img className="contact-icon" src={require("../images/instagram.png")}/></a>
            </h2>
            </section>
            <hr />
            <section id="products-part">
            <div className="container">
                <div className="row">
                    <Product productName="סדנאות" src={require("../images/courses.png")} />
                    <Product productName="ימי הולדת" src={require("../images/birthdays.png")} />
                    <Product productName="מסיבת רווקות" src={require("../images/bride.pdf.png")} />
                </div>
            </div>
            </section>
            <section id="gallery-part">
            <hr />
            <h2>גלריה</h2>
            <hr />
            <InstaFeed 
                token="IGQVJVR2FsQzFYckFlQVRnd1RNb0ZAyVXNTVTFLTFo0ejdFRm5WZA2VrbWhacEUwTUdFbjZAUdjZALdFRlUnB0bGx2N1QwcDQ0U01kWm5MbEZADOXNLVDB3b19WVEtYMlVsY28tN0pXUTlpYkV0TmlieUtNRAZDZDy"  
            />
            </section>
            

        </div>
    )
}