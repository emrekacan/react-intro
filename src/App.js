import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

export default function App() {
  return (
    <div>
      <Navi />
      <CategoryList />
      <ProductList />
    </div>
  );
}
