import React from 'react';

const Header = () => (
  <header className="text-center bg-blue-600 text-white py-12">
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mb-4">Tu Nombre</h1>
      <h2 className="text-2xl font-light mb-4">Profesión</h2>
      <img className="rounded-full w-36 h-36 mx-auto mb-6" src="tu_foto.jpg" alt="Foto de Tu Nombre" />
      <p className="text-lg">Soy un profesional en... con habilidades en...</p>
    </div>
  </header>
);

export default Header;
