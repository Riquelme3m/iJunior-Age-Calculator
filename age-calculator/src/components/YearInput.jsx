import React from "react";

function YearInput({value,onChange,error}) {
    return (
        <div>
            <p>year</p>
            <input type="number" name="" id="year" value={value} onChange={onChange} min="0" max="2025" placeholder="YYYY"/>
            {error? <p style={{color:"red"}}>{error}</p>:null}
        </div>
    );
}


export default YearInput;