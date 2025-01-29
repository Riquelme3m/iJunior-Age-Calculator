import React from "react";


function DayInput({value,onChange,error}){
    return(
        <div>
            <p>day</p>
            <input type="number" value={value} onChange={onChange} min="1" max="31" placeholder="DD"/>
            {error ? <p style={{color:"red"}}>{error}</p> : null}
        </div>
        
        
    );
}

export default DayInput;