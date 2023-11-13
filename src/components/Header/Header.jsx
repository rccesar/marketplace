import React from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <text className="mks">MKS
          <text className="sistemas"> Sistemas</text>
        </text>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
