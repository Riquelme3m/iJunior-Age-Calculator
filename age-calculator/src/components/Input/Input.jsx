import React from "react";
import './Input.css'

function Input({type, value, onChange, error}) {
    const configs = {
        day: {
            placeholder: "DD",
            min: 1,
            max: 31,
            label: "D A Y"
        },
        month: {
            placeholder: "MM",
            min: 1,
            max: 12,
            label: "M O N T H"
        },
        year: {
            placeholder: "YYYY",
            min: 0,
            max: new Date().getFullYear(),
            label: "Y E A R"
        }
    };

    return (
        <div className={`input-container ${error ? 'error' : ''}`}>
            <p>{configs[type].label}</p>
            <input 
                type="number" 
                value={value} 
                onChange={onChange}
                min={configs[type].min}
                max={configs[type].max}
                placeholder={configs[type].placeholder}
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default Input;
