import React,{useEffect, useState} from "react";


export default function(props) {

    const [iserror, setIserror] = useState(true);
    const [val,setVal] = useState({name: "", value: ""});

    useEffect(() => {
        if(!iserror && val.name){
            props.func(val)
        }
    }, [iserror, val])

    const handleChange = (event) => {
        setIserror(false);
        setVal({name: event.target.name, value: event.target.value});
    }


    return(
        <div class="form-group row">
            <div class="col-sm-12">
            <h1 className="eval-price-text">מחיר מוערך: XXX</h1>
            </div>
        </div>
        
    )
  }