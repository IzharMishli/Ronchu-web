import React from "react";
import "../index.css"
import Product from "./Product";
//import InstaFeed from "./insta-react-feed/InstaFeed";
import {InstaFeed} from "insta-react-feed";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Management from "./Management";


export default function()
{
    return( 
        <div className="bodyDiv">
            <section id="contact-part">
            <h2 className="contact-whatsapp">
            <a href="https://api.whatsapp.com/send?phone=972547320993&text=%D7%94%D7%99%D7%99%20:),%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%90%D7%9C%D7%99%D7%99%D7%9A%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8">
            <img className="contact-icon" src={require("../images/whatsapp.png")}/></a>
            צרו קשר
            <a href="https://www.instagram.com/ron_sharabi/"><img className="contact-icon" src={require("../images/instagram.png")}/></a>
            </h2>
            <Link to="/invite"><button type="button" class="btn btn-outline-success">צור הזמנה</button></Link>
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
                token="IGQVJWTDdlZAlNna1NBemQ1eXhKQWRMNkZAvSlloWnMwaHkyai1rRnU1VVRya2lUMWNGQ0pwdkJOdkotN25xTVNWaHByZAXdIcHpJMUh0N3JDNTZAPNDdpSUJ3a0VLUnBXVXhYM2NGNVNwWVRIUU1yRkREUwZDZD"  
                tag="ronchu" //can be empty
            />
            </section>
            

        </div>
    )
}