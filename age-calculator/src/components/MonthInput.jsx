import React from "react";


function MonthInput({value,onChange,error}){
    return(
        <div>
            <p>month</p>
            <input type="number" name="" id="month" value={value} onChange={onChange} min="1" max="12" placeholder="MM"/>
            {error ? <p style={{color:"red"}}>{error}</p>:null}
        </div>
    )
}

export default MonthInput;