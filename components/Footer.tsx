import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="flex flex-col p-10 mx-auto bg-gray-900 md:flex-row md:justify-between">
        <nav className="flex flex-col items-center gap-4 mb-6 font-bold text-white uppercase md:mb-0 md:flex-row">
          <Link href="/">
            <a className="p-1 transition hover:text-orange-500">Inicio</a>
          </Link>
          <Link href="/nosotros">
            <a className="p-1 hover:text-orange-500">Nosotros</a>
          </Link>
          <Link href="/blog">
            <a className="p-1 hover:text-orange-500">Blog</a>
          </Link>
          <Link href="/tienda">
            <a className="p-1 hover:text-orange-500">Tienda</a>
          </Link>
        </nav>
        <p className="text-center text-white">Todos los derechos resevados</p>
      </div>
    </footer>
  );
};

export default Footer;
