import React from 'react';
import classNames from 'classnames';
import { Button as AntdBtn } from 'antd';

type ButtonProps = {
  type?: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({ type, children }) => {
  return (
    <AntdBtn
      className={classNames('btn', {
        err: type === 'err',
      })}>
      {children}
    </AntdBtn>
  );
};

export default Button;
