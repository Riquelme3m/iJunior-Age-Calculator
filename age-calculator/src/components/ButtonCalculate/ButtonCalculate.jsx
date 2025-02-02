import React from "react";
import iconArrow from "../../assets/images/icon-arrow.svg"
import './ButtonCalculate.css'

function ButtonCalculate({onClick}){
    return(
        <button id="button-calculate" onClick={onClick}>
            <img id="arrow" src={iconArrow} alt="Icon Arrow" />
        </button>
    );
}

export default ButtonCalculate;