import React,{useEffect, useState} from "react";


export default function(props)
{
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
        <select name="amount" class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={handleChange}>
            <option selected>כמות</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
                  
    )
}
