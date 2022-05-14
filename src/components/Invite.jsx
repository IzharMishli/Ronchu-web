import React,{useEffect, useState} from "react";
import "../index.css"
import "../styles/invitestyle.css"
import Selector from "./invite/Selector"
import FoodOption from "./invite/FoodOption"
import Field from "./invite/Field"
import PriceArea from "./invite/PriceArea"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function()
{
    const [invite, setInvite] = useState({
        name: "",
        email: "",
        phone: "",
        amount: 0,
        foods: [],
        deserts: []
    })

    const [iserror, setIserror] = useState(true);
    const [price, setPrice] = useState(0);

    useEffect(function inviteChanged() {
        if (!iserror)
        console.log(invite);
        setIserror(true);
        calcPrice();
    }, [invite]);

    function handleChange(val, isAdding=true) {
        setIserror(false);
        const {name, value} = val;
        if (isAdding){
            setInvite((prev) => {
                if (Array.isArray(invite[name])){
                        const tempArr = invite[name];
                        tempArr.push(value);
                        return{
                            ...prev,
                            [name]: tempArr
                        }}
                else{
                    return{
                        ...prev,
                        [name]:value
                    }
                }
            })
        }else if(Array.isArray(invite[name])){
            var tempArr = invite[name];
            tempArr = removeItemAll(tempArr, value);
            setInvite((prev) => {
            return{
                ...prev,
                [name]: tempArr
            }})
        }

        function removeItemAll(arr, value) {
            var i = 0;
            while (i < arr.length) {
              if (arr[i] === value) {
                arr.splice(i, 1);
              } else {
                ++i;
              }
            }
            return arr;
          }
        
        

        
    }

    function calcPrice(){
        var price = invite.amount * 20 * (invite.foods.length > 0 ? invite.foods.length*1.5 : 1) * (invite.deserts.length > 0 ? invite.deserts.length*1.5 : 1);
        
        setPrice(price);
    }

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
                <Field label="שם מלא" type="text" name="name" func={handleChange} />
                <Field label="תאריך" type="date" name="date" func={handleChange} />
                <Field label="טלפון" type="tel" name="phone" func={handleChange} />
                <Field label="כתובת" type="text" name="address" func={handleChange} />
                <Field label="עיר" type="text" name="city" func={handleChange} />
                <Field label="אימייל" type="email" name="email" func={handleChange} />
                
                {/* ---------- Participates ----------- */}
                <div class="form-group row">
                    <div class="col-sm-10 col-8">
                        <div class="col-auto my-1">
                            <Selector func={handleChange} />
                            
                        </div>
                    </div>
                    <label class="col-sm-2 col-4 col-form-label">משתתפים</label>
                    </div>
                {/* ---------- main food ----------- */}
                
                <div class="form-group row choose-area">
                    
                    <div class="col-10">
                    <div class="form-group row">
                        <FoodOption name="foods" food="פסטה שמנת פטריות" func={handleChange}/>
                        <FoodOption name="foods" food="פסטה רוזה" func={handleChange}/>
                        <FoodOption name="foods" food="פסטה טעימה מאוד" func={handleChange}/>
                        </div>
                    </div>
                    <label class="col-2 col-form-label">מנות חלביות</label>
                    
                </div>

                {/* ---------- main food ----------- */}
                
                <div class="form-group row choose-area">
                    
                    <div class="col-10">
                    <div class="form-group row">
                    <FoodOption name="deserts" food="קינוח טעים רצח" func={handleChange} />
                        <FoodOption name="deserts" food="פירות" func={handleChange} />
                        <FoodOption name="deserts" food="קינוח טעים מאוד" func={handleChange} />
                        </div>
                    </div>
                    <label class="col-2 col-form-label">קינוחים</label>
                    
                </div>

                {/* ---------- Evaluated price ----------- */}
                <div class="form-group row">
                    <div class="col-sm-12">
                    <h1 className="eval-price-text">מחיר מוערך: {price}</h1>
                    </div>
                </div>

                {/* ---------- Send ----------- */}
                <div class="form-group row">
                    <div class="col-sm-12">
                    <button type="submit" class="btn btn-success">שליחה</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
