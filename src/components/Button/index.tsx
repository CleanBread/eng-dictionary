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
        btn__err: type === 'err',
        btn__success: type === 'success',
      })}>
      {children}
    </AntdBtn>
  );
};

export default Button;
