import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../index';

import './Header.scss';

import logoImg from '../../assets/img/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <img src={logoImg} alt="" className="header__logo-img" />
            <div className="header__logo-text">Jungle</div>
          </Link>
          <div className="header__nav">
            <Link className="header__nav-item active">Наборы слов</Link>
            <Link className="header__nav-item">Тренировки</Link>
            <Link className="header__nav-item">Словарь</Link>
            <Button>Выйти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
