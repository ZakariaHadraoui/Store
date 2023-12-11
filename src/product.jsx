import React from 'react';

function Product({ product, handleclick }) {
  return (
    <div className='col-md-4 mb-4'>
      <div className='product d-flex flex-column align-items-center justify-content-center shadow'>
        <img src={product.image} height={160} alt={product.title} />
        <p style={{ marginTop: '16px' }}>{product.title}</p>
        <h4>{product.price} Dhs</h4>
        <button className='add' onClick={() => handleclick(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}


export default Product;
