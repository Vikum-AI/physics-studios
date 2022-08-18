import { Input, Modal } from "@mantine/core";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import Store from "../../store/GenericStore";

function EnrollContact() {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Modal opened={opened} onClose={() => setOpened(!opened)}>
        <div>
          <h1 className="text-xl font-bold">Confirm Enrolment in Class</h1>
          <h1 className="mt-4 text-md">Selected Class: Cambridge ALs 2023</h1>
        </div>
        <div className="mt-8">
          <h1>Enter your details</h1>
          <div className="my-4">
            <h3 className="text-sm mb-2 text-gray-600">Name</h3>
            <Input placeholder="Name" variant="filled" required />
          </div>
          <div className="my-4">
            <h3 className="text-sm mb-2 text-gray-600">Email Address</h3>
            <Input
              placeholder="example@example.com"
              type="email"
              variant="filled"
              required
            />
          </div>
          <div className="my-5 mt-10">
            <Button label="Confirm" />
          </div>
        </div>
      </Modal>
      <button onClick={() => setOpened(!opened)}>Open Modal</button>
    </div>
  );
}

export default EnrollContact;
