import React from 'react';

import logo from './logo.jpg';
import Logo from '../Logo';

import TitleArea from '../TitleArea';
import Title from '../Title';

import HeaderButtons from '../HeaderButtons';
import Button from '../Button';

function Header(props) {
  return (
    <header className="header">
      <Logo src={logo} alt="Company`s logo"/>
      <TitleArea>
        <Title>Комитет по промышленной политике и инновациям Санкт-Петербурга</Title>
        <Title>Интерактивная карта промышленных зон города Санкт-Петербурга</Title>
      </TitleArea>
      <HeaderButtons>
        <Button className="header_buttonEntrance">Вход</Button>
        <Button className="header_buttonRegistration">Регистрация</Button>
      </HeaderButtons>
    </header>
  );
}

export default Header;