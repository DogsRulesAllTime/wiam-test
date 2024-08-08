// src/components/ConfirmationModal.tsx
import React from "react";
import { Modal, ModalFuncProps } from "antd";

interface ConfirmationModalProps extends ModalFuncProps {
  onClose: () => void;
  lastName: string;
  firstName: string;
  loanAmount: number;
  loanDuration: number;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onClose,
  lastName,
  firstName,
  loanAmount,
  loanDuration,
  ...props
}) => (
  <Modal
    {...props}
    title="Подтверждение заявки"
    onOk={onClose}
    onCancel={onClose}
    okText="Ок"
    cancelButtonProps={{ style: { display: "none" } }}
  >
    <p>
      Поздравляем, {lastName} {firstName}. Вам одобрена {loanAmount}$ на{" "}
      {loanDuration} дней.
    </p>
  </Modal>
);

export default ConfirmationModal;
