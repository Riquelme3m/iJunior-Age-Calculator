import React from "react";
import iconArrow from "../assets/images/icon-arrow.svg"

function ButtonCalculate({onClick}){
    return(
        <button onClick={onClick}><img src={iconArrow} alt="Icon Arrow" onClick={onClick} /></button>
    );
}

export default ButtonCalculate;