import { useState } from 'react';

const InputNumber = () => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        const newValue = event.target.value;
        if (/^\d*\.?\d*$/.test(newValue)) {
            setValue(newValue);
        }
    };

    console.log(value);
    console.log(typeof value);
    console.log(Number(value));

    return (
        <div>
            <input
                type="text"
                className='text-white'
                placeholder="Your fav number"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputNumber;
