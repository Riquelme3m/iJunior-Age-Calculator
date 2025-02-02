import React from "react";
import './Display.css'

export default function Display({ years, months, days }) {
    // retorna o valor relativo a prop recebida
    const getValue = () => {
        if (years !== undefined) return years;
        if (months !== undefined) return months;
        if (days !== undefined) return days;
    }

    // retorna o texto relativo a prop recebida
    const getLabel = () => {
        if (years !== undefined) return "years";
        if (months !== undefined) return "months";
        if (days !== undefined) return "days";
        return "";
    }

    const value = getValue();
    const label = getLabel();

    return (
        <div className="display-item">
            <span className="number"> {value}</span>
            <span className="label"> {label}</span>
        </div>
    );
}