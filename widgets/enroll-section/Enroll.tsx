import { CheckIcon, Dialog, Input } from "@mantine/core";
import React, { useRef, useState } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import ModalComponent from "../../components/modal/Modal";
import EnrolData from "../../const/EnrolData";
import axios from "axios";

function Enrol() {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [opened, setOpened] = useState(false);

  const form = useRef<string | HTMLFormElement>("");

  const emailData = {
    service_id: "service_2j8ndro",
    template_id: "template_g0wo1c6",
    user_id: "MBq4q7Arr4yAB5mtj",
    template_params: {
      from_name: name,
      message: `${name} is requesting to join the ${label} class. Email of student: ${email}`,
    },
  };

  const sendPostEmail = (e: any) => {
    e.preventDefault();

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", emailData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    setOpened(true);
    setActive(false);
    // setTimeout(() => {
    //   setOpened(false), 5000;
    // });
  };

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
      {/* grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-10 */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-x-[14rem] place-content-start gap-grow">
          {EnrolData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              secondary={item.secondary}
              tertiary={item.tertiary}
              image={item.image}
              // extras="mx-20"
              button={item.button}
              onClick={() => {
                enrollFunc(item.title);
                setLabel(item.title);
              }}
            />
          ))}
        </div>
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
          <Button label="Submit" onClick={(e) => sendPostEmail(e)} />
        </div>
      </ModalComponent>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        position={{ bottom: 20, right: 20 }}
        className="flex bg-green-100"
      >
        <CheckIcon className="w-5 h-5 m-2 text-green-500" />
        <p className="m-2 text-green-600 font-medium">Enrolment Success</p>
      </Dialog>
    </div>
  );
}

export default Enrol;
