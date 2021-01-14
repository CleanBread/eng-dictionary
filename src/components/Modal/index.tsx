import React from 'react';
import { Modal as AntdModal } from 'antd';

type ModalProps = {
  isVisible: boolean;
  onOk: () => void;
};

const Modal: React.FC<ModalProps> = ({ isVisible = false, children, onOk }) => {
  return (
    <AntdModal visible={isVisible} onOk={onOk}>
      {children}
    </AntdModal>
  );
};

export default Modal;
