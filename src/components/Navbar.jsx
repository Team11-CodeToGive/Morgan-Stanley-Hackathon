import { useState, useEffect, useRef } from 'react'
import { Menu, X, User2Icon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-primary text-white shadow border-b border-purple-300 sm:rounded-b-lg rounded-b">
      <div className=" mx-auto px-8">
        <div className="flex justify-start">
          <div className="flex me-auto gap-6">
            <div>
              <a href="/" className="flex items-center bg-white px-10 py-1 my-3 rounded ">
                <span className="font-semibold text-lg"><img className="h-12" src="/logo.png" alt="Community Restoration Project" /></span>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-6  *:border-b-2 *:border-primary hover:*:border-white hover:*:text-bold">
              <a
                href="/"
                className="py-4 px-2  font-semibold transition duration-300"
              >
                Home
              </a>
              <a
                href="/events"
                className="py-4 px-2  font-semibold transition duration-300"
              >
                Events
              </a>
              <a
                href="/community-hub"
                className="py-4 px-2  font-semibold transition duration-300"
              >
                Community Hub
              </a>
              {/* <a
                href="https://www.communityrestorationproject.org/housing-assistance"
                className="py-4 px-2  font-semibold transition duration-300"
              >
                Programs
              </a>
              <a
                href="https://www.communityrestorationproject.org/contact"
                className="py-4 px-2 font-semibold transition duration-300"
              >
                Contact
              </a> */}
            </div>
          </div>
          <div className='flex gap-6 z-10'>
            <button className="lg:block border border-orange-200 hidden bg-accent hover:bg-orange-300 transition duration-100 my-auto px-6 py-2 text-white rounded-full">Donate</button>
            <div className="lg:block my-auto hidden"><UserSettingsDropdown isLoggedIn={true} /></div>

          </div>
          <div className=" flex items-center">
            <button
              className=" outline-none mobile-menu-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="text-2xl lg:hidden">{isOpen ? <X size={24} /> : <Menu size={24} />}</span>
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} hover:*:bg-purple-400 px-6 pb-8`}>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="/events" className="block py-2 px-4 text-sm hover:bg-gray-200">Events</a>
        <a href="/community-hub" className="block py-2 px-4 text-sm hover:bg-gray-200">Community Hub</a>
        <a href="/programs" className="block py-2 px-4 text-sm hover:bg-gray-200">Programs</a>
        <a href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      </div>
    </nav>
  )
}

import { User, Settings, LogOut, LogIn } from 'lucide-react';


const UserSettingsDropdown = ({ isLoggedIn }) => {
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
      onClick: () => console.log(isLoggedIn ? 'Logout clicked' : 'Login clicked'),
    },
  ];

  return (
    <div className="relative  text-black" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full shadow  bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <User className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1">
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
