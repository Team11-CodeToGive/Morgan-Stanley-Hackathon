import React from 'react';

const FormInputField = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="mb-4">
            <label className="block text-primary font-bold mb-2">{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 border border-secondary rounded focus:outline-none focus:border-accent"
            />
        </div>
    );
};

export default FormInputField;
