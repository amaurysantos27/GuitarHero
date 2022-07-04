import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[url('../public/img/header.jpg')] py-2 bg-cover bg-center bg-opacity-90">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between ">
          <Link href="/">
            <Image
              src="/img/logo.svg"
              alt="GuitarLA"
              width={300}
              height={200}
            />
          </Link>

          <nav className="flex gap-4 mb-6 font-bold text-white uppercase md:mb-0 ">
            <Link href="/">
              <a className="p-1 transition hover:bg-orange-500">Inicio</a>
            </Link>
            <Link href="/nosotros">
              <a className="p-1 hover:bg-orange-500">Nosotros</a>
            </Link>
            <Link href="/blog">
              <a className="p-1 hover:bg-orange-500">Blog</a>
            </Link>
            <Link href="/tienda">
              <a className="p-1 hover:bg-orange-500">Tienda</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
