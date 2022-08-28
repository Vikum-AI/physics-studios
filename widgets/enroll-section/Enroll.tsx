import { Input } from "@mantine/core";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import ModalComponent from "../../components/modal/Modal";
import EnrolData from "../../const/EnrolData";

function Enrol() {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const enrollFunc = (displayName: string) => {
    setActive(!active);
    return displayName;
  };

  return (
    <div className="mb-[10rem]">
      <div>
        <h1 className="text-3xl font-bold text-start m-8  ml-12">
          Enrol in a class
        </h1>
        <div className="w-[15rem] h-4 bg-red-200 relative -top-11 left-10 opacity-50 -z-10"></div>
      </div>
      <div className="flex justify-around items-baseline h-[110vh] mt-10 flex-wrap">
        {EnrolData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            secondary={item.secondary}
            tertiary={item.tertiary}
            image={item.image}
            extras="mx-20"
            button={item.button}
            onClick={() => {
              enrollFunc(item.title);
              setLabel(item.title);
            }}
          />
        ))}
      </div>
      <ModalComponent
        opened={active}
        onClick={() => setActive(!active)}
        enrolTitle={label}
      >
        <h1 className="mb-4 text-xl">Confirm Enrollment</h1>
        <div className="flex items-center">
          <h2 className="text-gray-600">Selected Class: </h2>
          <p className="ml-2 font-medium text-lg">{label}</p>
        </div>
        <div className="mt-4">
          <h2 className="mb-2 text-gray-600">Name</h2>
          <Input
            variant="filled"
            placeholder="name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div className="mt-4">
          <h2 className="mb-2 text-gray-600">Email</h2>
          <Input
            variant="filled"
            placeholder="email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="mt-6">
          <Button label="Submit" />
        </div>
      </ModalComponent>
    </div>
  );
}

export default Enrol;
