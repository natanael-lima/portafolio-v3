import React, { useState } from 'react';

const menuItems = [
  { label: 'Sobre Mi', id: 'about' },
  { label: 'Proyectos', id: 'project' },
  { label: 'Contacto', id: 'contact' },
];
type MenuItem = {
  label: string;
  id: string;
};

export default function Header() {
  const [activeItem, setActiveItem] = useState<MenuItem>(menuItems[0]);
  
  const handleClick = (id: string) => {
    const item = menuItems.find(item => item.id === id);
    if (item) {
      setActiveItem(item);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="w-full lg:rounded-br-3xl lg:w-[45%] bg-gray-900/25 border border-gray-400/30 rounded p-2 absolute top-0 left-0 z-10">
    <nav className="flex justify-between space-x-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.id)}
            className={`text-sm font-semibold py-2 px-5 rounded-lg transition-colors duration-200 ${
              activeItem.id === item.id
                ? 'bg-white bg-opacity-10 text-slate-100' // Fondo blanco con opacidad y texto blanco para el botón activo
                : 'text-white/90 hover:bg-white hover:bg-opacity-20' // Solo texto blanco y fondo de hover para los botones no activos
            }`}
          >
            {item.label}
          </button>
        ))}
    </nav>
  </header>
  );
}
