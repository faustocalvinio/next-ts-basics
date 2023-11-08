"use client"

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider: React.FC = ({ children }:any) => {
  // Define el estado del carrito de compras
  const [cart, setCart] = useState<string[]>(['a','b']);

  // Agregar un artículo al carrito
  const addToCart = (item: string) => {
    setCart([...cart, item]);
  };

  // Eliminar un artículo del carrito
  const removeFromCart = (item: string) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Paso 3: Crear un custom hook para consumir el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};
