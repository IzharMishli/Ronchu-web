import React,{useState} from "react";


export default function(props)
{
    const [isChecked, setChecked] = useState(false);

    const toggleClass = () => {
        setChecked(!isChecked);
    }

    return( 
        <div class="col-sm-4">
        <div class="form-check">
        
            <button type="button" class={isChecked ? "btn btn-info" : "btn btn-outline-info"} onClick={toggleClass}>{props.food}</button>
        </div>
        </div>
                  
    )
}
