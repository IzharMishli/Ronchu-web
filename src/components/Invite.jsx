import React from "react";
import "../index.css"
import "../styles/invitestyle.css"
import Selector from "./invite/Selector"
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
                <Link to="/"><button type="button" class="btn btn-primary">חזרה לעמוד הבית</button></Link>
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
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">פסטה שמנת פטריות</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">פסטה רוזה</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">פסטה טעימה מאוד</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-2">מנות חלביות</div>
                
            </div>

            {/* ---------- main food ----------- */}
            
            <div class="form-group row">
                
                <div class="col-sm-10">
                <div class="form-group row">
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">קינוח טעים מאוד</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">פירות</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">קינוח טעים רצח</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-2">קינוחים</div>
                
            </div>

            {/* ---------- Evaluated price ----------- */}
            <div class="form-group row">
                            <div class="col-sm-12">
                            <h1>מחיר מוערך: XXX</h1>
                            </div>
                        </div>

            {/* ---------- Send ----------- */}
            <div class="form-group row">
                <div class="col-sm-12">
                <button type="submit" class="btn btn-primary">שליחה</button>
                </div>
            </div>
            
        </div></div>
    )
}
