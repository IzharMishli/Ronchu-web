import React from "react";
import "../index.css"
import Product from "./Product";

export default function()
{
    return( 
        <div className="bodyDiv">
            <h2 className="contact-whatsapp">
            <a href="https://api.whatsapp.com/send?phone=972547320993&text=%D7%94%D7%99%D7%99%20:),%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%90%D7%9C%D7%99%D7%99%D7%9A%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8">
            <img className="contact-icon" src={require("../images/whatsapp.png")}/></a>
            <a href="https://www.instagram.com/ron_sharabi/"><img className="contact-icon" src={require("../images/instagram.png")}/></a>
            צרו קשר</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <Product productName="סדנאות" src={require("../images/courses.png")} />
                    <Product productName="ימי הולדת" src={require("../images/birthdays.png")} />
                    <Product productName="מסיבת רווקות" src={require("../images/bride.pdf.png")} />
                </div>
            </div>
            <hr />
        </div>
    )
}