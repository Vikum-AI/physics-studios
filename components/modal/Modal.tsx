import React from "react";
import { Modal } from "@mantine/core";
import IModal from "./IModal";

function ModalComponent({ opened, onClick, children }: IModal) {
  return (
    <div>
      <Modal opened={opened} onClose={onClick}>
        {children}
      </Modal>
    </div>
  );
}

export default ModalComponent;
