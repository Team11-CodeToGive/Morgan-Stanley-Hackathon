import React, { useState } from 'react';

const SearchableDropdown = ({ label, options, onChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const filteredOptions = options.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
        console.log(option)
        onChange(option);
        setSearchTerm(option.name);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative mb-4">
            <label className="block text-primary font-bold mb-2">{label}</label>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true); // Open dropdown when typing
                }}
                placeholder="Search community..."
                className="w-full p-2 border border-secondary rounded focus:outline-none focus:border-accent"
                onFocus={() => setIsOpen(true)} // Open dropdown on focus
                onBlur={() => setTimeout(() => setIsOpen(false), 100)} // Close dropdown when losing focus
            />
            {isOpen && filteredOptions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-secondary mt-2 rounded max-h-48 overflow-y-auto shadow-lg w-full">
                    {filteredOptions.map((option) => (
                        <li
                            key={option.community_id}
                            className="p-2 hover:bg-secondary cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchableDropdown;
