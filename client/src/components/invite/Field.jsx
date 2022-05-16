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
        <div class="form-group row row-field">
            <div class="col-sm-10 col-8">
                <input name={props.name} type={props.type} class="form-control" onChange={handleChange} />
            </div>
            <label class="col-sm-2 col-4 col-form-label">{props.label}</label>
        </div>
                  
    )
}
