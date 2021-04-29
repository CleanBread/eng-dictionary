import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Button } from '../index';
import { useMst } from '../../store/root';

import './Header.scss';

import logoImg from '../../assets/img/logo.svg';

const Header: React.FC = observer(() => {
  const { user } = useMst();
  console.log(user);
  return (
    <header className="header">
      <div className="row">
        <div className="header__content">
          <NavLink to="/wordsets" className="header__logo">
            <img src={logoImg} alt="" className="header__logo-img" />
            <div className="header__logo-text">Jungle</div>
          </NavLink>
          <div className="header__nav">
            <NavLink exact to="/wordsets" className="header__nav-item">
              Наборы слов
            </NavLink>
            <NavLink exact to="/words" className="header__nav-item">
              Тренировка слов
            </NavLink>
            <NavLink exact to="/" className="header__nav-item">
              Словарь
            </NavLink>
            {user.isLogin ? (
              <Button onClick={user.logout}>Выйти</Button>
            ) : (
              <Button link="/in">Войти</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
