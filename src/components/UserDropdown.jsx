import { User, Settings, LogOut, LogIn } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { login, logout, getUserName } from '../utils/userUtils';
import { navigate } from 'astro:transitions/client';

export default function UserSettingsDropdown({ isLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { icon: User, label: 'Profile', onClick: () => console.log('Profile clicked') },
        // { icon: Settings, label: 'Settings', onClick: () => console.log('Settings clicked') },
        {
            icon: isLoggedIn ? LogOut : LogIn,
            label: isLoggedIn ? 'Logout' : 'Login',
            onClick: () => isLoggedIn ? logout() : navigate('/')
            ,
        },
    ];

    return (
        <div className="relative  text-black" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 px-4 flex gap-1 rounded-full shadow  bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                   <span >{getUserName()[0].toUpperCase() + getUserName().slice(1)}</span>
                   <User className="h-6 w-6 shadow rounded-full p-1 outline-1 outline-gray-300" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => {
                                item.onClick();
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                            <item.icon className="h-5 w-5 text-gray-500" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
