import React from 'react';

import NavElem from '../NavElem';

function Navigation(props) {
  return (
    <nav className="navigation">
      <NavElem name="Главная" />
      <NavElem name="О нас" />
      <NavElem name="Новости" />
      <NavElem name="Контакты" />
    </nav>
  );
}

export default Navigation;