import React from 'react';

export default function ProductSect({ productBG, productName, productPrice }) {
  return (
    <section
      id="model-y"
      className="flex h-screen w-screen flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: productBG }}
    >
      <div
        id="model-price"
        className="flex h-screen flex-col items-center justify-start pt-[150px] tracking-widest text-white md:pt-[80px] 2xl:pt-[150px]"
      >
        <h1 className="text-6xl font-bold md:text-4xl ">{productName}</h1>
        <h3 className="text-2xl md:text-3xl">From ${productPrice}</h3>
      </div>
      <div
        id="model-buttons"
        className="flex w-screen flex-col gap-4 px-6 pb-20 md:flex-row md:justify-center md:pb-16"
      >
        <button className="h-12 rounded-md bg-gray-300 bg-opacity-[0.7] font-semibold tracking-wider text-gray-800 md:w-80">
          Explore Inventory
        </button>
        <button className="h-12 rounded-md bg-slate-900 bg-opacity-[0.7] font-semibold tracking-wider text-gray-300 md:w-80">
          Check Specifications
        </button>
      </div>
    </section>
  );
}
