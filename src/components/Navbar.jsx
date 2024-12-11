import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import '../style/app.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setSelected(path);
    setIsOpen(false); // Fechar o menu ao selecionar um item (apenas para dispositivos móveis)
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/imgs/logo_washes.svg" alt="Logo" className="h-8 mr-2" />
          <span className="text-2xl font-medium">WASHES</span>
        </div>
        <div className="hidden lg:flex space-x-8">
          {[
            { name: 'HOME', path: '/' },
            { name: 'QUEM SOMOS', path: '/quem-somos' },
            { name: 'WASHES 2025', path: '/washes-2025' },
            { name: 'EDIÇÕES ANTERIORES', path: '/edicoes-anteriores' },
            { name: 'DATAWASHES', path: '/datawashes' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`text-gray-500 hover:text-white hover:bg-pink-500 px-3 py-2 rounded transition-colors duration-300 relative group ${selected === item.path ? 'font-bold' : ''
                }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 ${selected === item.path ? 'bg-pink-500' : 'bg-transparent'
                  } group-hover:bg-pink-500 transition-all duration-300`}
              ></span>
            </Link>
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
          {[
            { name: 'HOME', path: '/' },
            { name: 'QUEM SOMOS', path: '/quem-somos' },
            { name: 'WASHES 2024', path: '/washes-2024' },
            { name: 'EDIÇÕES ANTERIORES', path: '/edicoes-anteriores' },
            { name: 'DATAWASHES', path: '/datawashes' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`text-gray-500 text-2xl my-4 hover:text-white hover:bg-pink-500 px-3 py-2 rounded transition-colors duration-300 relative group ${selected === item.path ? 'font-bold' : ''
                }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 ${selected === item.path ? 'bg-pink-500' : 'bg-transparent'
                  } group-hover:bg-pink-500 transition-all duration-300`}
              ></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
