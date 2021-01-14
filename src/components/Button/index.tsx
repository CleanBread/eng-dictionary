import React from 'react';
import classNames from 'classnames';
import { Button as AntdBtn } from 'antd';

interface ButtonProps {
  type?: string;
  size?: string;
  position?: string;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  size,
  position,
  onClick,
  children,
}) => {
  return (
    <AntdBtn
      onClick={onClick}
      className={classNames('btn', position, size, {
        err: type === 'err',
      })}>
      {children}
    </AntdBtn>
  );
};

export default Button;
