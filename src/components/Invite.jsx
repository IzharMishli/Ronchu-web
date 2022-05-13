import React from "react";
import "../index.css"
import "../styles/invitestyle.css"
import Selector from "./invite/Selector"
import FoodOption from "./invite/FoodOption"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function()
{
    
    return( 
        <div className="invite-page">
            {/* ---------- Back to main page ----------- */}
        <div class="form-group row">
                <div class="col-sm-12">
                <Link to="/"><button type="button" class="btn btn-warning">חזרה לעמוד הבית</button></Link>
                </div>
            </div>
        
        <div className="invite-part">


            {/* ---------- Name ----------- */}
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName3" placeholder="שם מלא" />
                </div>
                <label for="inputName3" class="col-sm-2 col-form-label">שם מלא</label>
            </div>
            {/* ---------- Name ----------- */}
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName3" placeholder="טלפון" />
                </div>
                <label for="inputName3" class="col-sm-2 col-form-label">טלפון</label>
            </div>
            {/* ---------- Email ----------- */}
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label">אימייל</label>
            </div>
            {/* ---------- Participates ----------- */}
            <div class="form-group row">
                <div class="col-sm-10">
                    <div class="col-auto my-1">
                        <Selector />
                        
                    </div>
                </div>
                <label for="inputPassword3" class="col-sm-2 col-form-label">משתתפים</label>
                </div>
            {/* ---------- main food ----------- */}
            
            <div class="form-group row">
                
                <div class="col-sm-10">
                <div class="form-group row">
                    <FoodOption food="פסטה שמנת פטריות" />
                    <FoodOption food="פסטה רוזה" />
                    <FoodOption food="פסטה טעימה מאוד" />
                    </div>
                </div>
                <label class="col-sm-2 col-form-label">מנות חלביות</label>
                
            </div>

            {/* ---------- main food ----------- */}
            
            <div class="form-group row">
                
                <div class="col-sm-10">
                <div class="form-group row">
                <FoodOption food="קינוח טעים רצח" />
                    <FoodOption food="פירות" />
                    <FoodOption food="קינוח טעים מאוד" />
                    </div>
                </div>
                <label class="col-sm-2 col-form-label">קינוחים</label>
                
            </div>

            {/* ---------- Evaluated price ----------- */}
            <div class="form-group row">
                            <div class="col-sm-12">
                            <h1 className="eval-price-text">מחיר מוערך: XXX</h1>
                            </div>
                        </div>

            {/* ---------- Send ----------- */}
            <div class="form-group row">
                <div class="col-sm-12">
                <button type="submit" class="btn btn-success">שליחה</button>
                </div>
            </div>
            
        </div></div>
    )
}
