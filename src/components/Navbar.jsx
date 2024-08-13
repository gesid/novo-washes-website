import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style/app.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-lg font-semibold">WASHES</span>
        </div>
        <div className="hidden lg:flex space-x-8">
          {['HOME', 'QUEM SOMOS', 'WASHES 2024', 'EDIÇÕES ANTERIORES', 'DATAWASHES'].map((item, index) => (
            <a key={index} href="#" className="text-gray-500 hover:text-white hover:bg-pink-500 px-3 py-2 rounded transition-colors duration-300 relative group">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-pink-500 transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center z-40">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes size={24} />
          </button>
          {['HOME', 'QUEM SOMOS', 'WASHES 2024', 'EDIÇÕES ANTERIORES', 'DATAWASHES'].map((item, index) => (
            <a key={index} href="#" className="text-gray-500 text-2xl my-4 hover:text-white hover:bg-pink-500 px-3 py-2 rounded transition-colors duration-300 relative group">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-pink-500 transition-all duration-300"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;