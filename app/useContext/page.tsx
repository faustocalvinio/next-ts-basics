"use client"
import { ReturnHome } from '@/components/ReturnHome'
import { CartProvider, useCart } from '@/context/CartContext'
// import { CartContext, CartProvider } from '@/context/CartContext'
import React, { useContext, useRef } from 'react'

const ContextPage = () => {
  const {cart, addToCart} = useCart()
  const textInput = useRef()
  
  // const {cart2} = useContext(CartContext)


  console.log();
  
  function handleAddItem (e) {
    e.preventDefault();
    addToCart(textInput.current.value);
    textInput.current.value = '';
  }




  return (
    <>
        <div>ContextPage</div>
        <ReturnHome />
        <form onSubmit={handleAddItem} action="" className='flex gap-4'>
          <input ref={textInput} className='py-2 px-4 text-black' type="text"  />
          <button className='py-2 px-4 bg-violet-500' type="submit">Add To Cart</button>
        </form>
        <h1>{JSON.stringify(cart)}</h1>
    </>
  )
}

export default ContextPage