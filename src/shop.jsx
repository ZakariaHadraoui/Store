import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from './product';
import 'bootstrap/dist/css/bootstrap.min.css';

function Shop({ articles, handleclick }) {

  return (
    <div className='shop'>
      <div className='shoptitle'>
        <h1>Zakaria Shop</h1>
      </div>
      <div className='products row'>
        {articles.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleclick={handleclick}

          />

        ))}
      </div>
    </div>
  );
}

export default Shop;
