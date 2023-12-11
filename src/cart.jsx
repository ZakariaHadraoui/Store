import React, { useEffect, useState } from 'react';

function Cart({ cart, setcart }) {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState({});

  function handlePrice() {
    let ans = 0;
    cart.forEach((ele) => {
      ans += ele.price * (quantity[ele.id] || 1);
    });
    setPrice(ans.toFixed(2));
  }

  function handleRemove(id) {
    const updatedCart = cart.filter((ele) => ele.id !== id);
    setcart(updatedCart);
  }

  function addToCart(id) {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: (prevQuantity[id] || 0) + 1,
    }));
  }

  function removeFromCart(id) {
    if (quantity[id] > 1) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [id]: prevQuantity[id] - 1,
      }));
    } else {
      const newQuantity = { ...quantity };
      delete newQuantity[id];
      setQuantity(newQuantity);
    }
  }

  useEffect(() => {
    handlePrice();
  }, [cart, quantity]);

  return (
    <article style={{ background: 'white' }}>
      <div className='cart'>
        <h1>Cart Items</h1>
        <div className='d-flex flex-column w-100 justify-content-between'>
          {cart.map((ele) => {
            return (
              <div className='d-flex align-items-center justify-content-between mb-3' key={ele.id}>
                <img className='mx-3' src={ele.image} height={80} alt={ele.title} />
                <h5 className='mx-2'>{ele.title}</h5>
                <h6 style={{ background: '#39A7FF' }} className='fw-bold rounded p-2'>
                  {ele.price} Dhs
                </h6>
                <div className='btns mx-3'>
                  <button
                    className='btn btn1 btn-secondary mx-2'
                    onClick={() => removeFromCart(ele.id)}
                  >
                    -
                  </button>
                  <span>{quantity[ele.id] || 1}</span>
                  <button
                    className='btn btn2 btn-secondary mx-2'
                    onClick={() => addToCart(ele.id)}
                  >
                    +
                  </button>
                  <button
                    className='btn btn3 btn-danger mx-2'
                    onClick={() => handleRemove(ele.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <h1>Total Price : {price} Dhs</h1>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Cart;
