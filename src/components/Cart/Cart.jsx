import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div>
        <text style={{color:'white'}}>Carrinhos de Compras</text>
      </div>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>
      <div className="cart-resume">
        <text className="total">Total: </text>
        {formatCurrency(totalPrice, 'BRL')}
      </div>
      <div className="back">
        <text className="finalizar">Finalizar Compra</text>
      </div>
    </section>
  );
}

export default Cart;
