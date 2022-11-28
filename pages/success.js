import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por su orden!</h2>
        <p className="email-msg">Revise su email para encontrar su recibo.</p>
        <p className="description">
          Si tiene alguna pregunta, Por favor escribir al siguiente mail
          <a className="email" href="mailto:orden@ejemplo.com">
            orden@ejemplo.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuar Comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success