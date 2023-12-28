import React from 'react';
import Header from './Header';
import ProductSect from './ProductSect';

export default function App() {
  return (
    <div id="app">
      <Header />
      <ProductSect
        productBG="url('/src/assets/model-y.jpg')"
        productName="Model Y"
        productPrice="649.99"
      />
      <ProductSect
        productBG="url('/src/assets/model-3.jpg')"
        productName="Model 3"
        productPrice="579.50"
      />
      <ProductSect
        productBG="url('/src/assets/model-x.png')"
        productName="Model X"
        productPrice="329.99"
      />
      <ProductSect
        productBG="url('/src/assets/model-s.png')"
        productName="Model S"
        productPrice="189.95"
      />
    </div>
  );
}
