import React from 'react';

function RadioButton({ label, name, value, checked, onChange }) {
   
    return (
        <label className="inline-flex items-center">
            <input
                type="radio"
                className='inline-block 
                font-bold
                px-4
                py-2
                mr-4
                leading-tight
                border
                border-gray-700
                rounded
                appearance-none
                focus:outline-none
                focus:border-orange
                checked:orange
                checked:border-transparent'
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="ml-2">{label}</span>
        </label>
    );
}

export default RadioButton;
