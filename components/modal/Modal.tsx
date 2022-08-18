import React, { useState } from "react";
import { Modal } from "@mantine/core";
import IModal from "./IModal";
import Store from "../../store/GenericStore";
import { observer } from "mobx-react";

function Modal({ opened }: IModal) {
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => {
          !opened;
        }}
      >
        <h1>Modal</h1>
      </Modal>
    </div>
  );
}

export default Modal;
