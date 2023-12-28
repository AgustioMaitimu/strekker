import React from 'react';
import brand from './assets/brand.png';

export default function Header() {
  return (
    <nav id="header" className="flex justify-center">
      <h1 className="fixed left-4 top-3 h-12 cursor-pointer font-logoFont text-3xl text-white outline-black md:text-5xl">
        Strekker
      </h1>
      <div
        id="header-middle-options"
        className="fixed mt-7 hidden items-center justify-center gap-7 font-bold tracking-widest text-white md:flex"
      >
        <a href="">Blenders</a>
        <a href="">Rice Cookers</a>
        <a href="">Microwaves</a>
        <a href="">Pistols</a>
      </div>
      <button
        id="header-menu"
        className="fixed right-4 top-4 h-8 w-20 rounded-lg bg-gray-800 bg-opacity-[0.9] font-semibold tracking-wider text-white md:hidden"
      >
        Menu
      </button>
    </nav>
  );
}
