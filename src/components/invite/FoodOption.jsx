import React,{useEffect, useState} from "react";


export default function(props)
{
    const [isChecked, setChecked] = useState(false);
    const [iserror, setIserror] = useState(true);
    const [val,setVal] = useState({name: "", value: ""});

    useEffect(() => {
        if(!iserror && val.name){
            props.func(val, isChecked);
            setVal({name: "", value: ""});
        }
    }, [isChecked, iserror, val])

    const toggleClass = (event) => {
        setIserror(false);
        
        setVal({name: event.target.name, value: event.target.value});
        setChecked(!isChecked);
        event.preventDefault();
    }

    return( 
        <div class="col-sm-4">
        <div class="form-check">
            <button name={props.name} value={props.food} type="button" class={isChecked ? "btn btn-info" : "btn btn-outline-info"} onClick={toggleClass}>{props.food}</button>
        </div>
        </div>
                  
    )
}
