import React from 'react';
import classNames from 'classnames';
import { Button as AntdBtn } from 'antd';
import { Link } from 'react-router-dom';

interface ButtonProps {
  type?: string;
  size?: string;
  position?: string;
  onClick?: () => void;
  link?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  size,
  position,
  onClick,
  children,
  link,
}) => {
  const Btn = (
    <AntdBtn
      onClick={onClick}
      className={classNames('btn', position, size, {
        btn__err: type === 'err',
        btn__success: type === 'success',
      })}>
      {children}
    </AntdBtn>
  );
  if (link) {
    return <Link to={link}>{Btn}</Link>;
  }
  return Btn;
};

export default Button;
