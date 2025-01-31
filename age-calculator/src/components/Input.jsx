import React from "react";

function Input({type, value, onChange, error}) {
    const configs = {
        day: {
            placeholder: "DD",
            min: 1,
            max: 31,
            label: "DAY"
        },
        month: {
            placeholder: "MM",
            min: 1,
            max: 12,
            label: "MONTH"
        },
        year: {
            placeholder: "YYYY",
            min: 0,
            max: new Date().getFullYear(),
            label: "YEAR"
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
