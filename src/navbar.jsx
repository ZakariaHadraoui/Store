import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

function Navbar({ setshow, show, cart }) {
  return (
    <header>
      <ul>
        <button className='btn1' style={{ border: 'none' }} onClick={() => setshow(true)}> <Link to={'/'} className='link'>Shop</Link></button>

        <button className='btn2' style={{ border: 'none' }} onClick={() => setshow(false)}> <Link to={'/cart'} className='link'><ShoppingCart></ShoppingCart><span style={{ fontSize: '20px' }}>{cart.length}</span></Link></button>

      </ul>
    </header>
  )
}

export default Navbar