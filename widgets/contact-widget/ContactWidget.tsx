import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { CheckIcon, Dialog, Input, Textarea } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";

import Button from "../../components/button/Button";
import Socials from "../../components/socials/Socials";

function ContactWidget() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [active, setActive] = useState(false);

  const clearState = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const emailData = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    template_params: {
      from_name: name,
      message: `Message from ${email} @Physics Studios, ${message}`,
    },
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setActive(true);

    clearState();

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", emailData)
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[70vh] relative top-60 items-center lg:-top-14 flex flex-col lg:flex-row justify-around gap-x-20 mx-2 md:mx-20">
      <div className="flex flex-col justify-around rounded-md p-10 w-full">
        <div>
          <h1 className="text-3xl font-medium text-gray-800">
            Fill out the form
          </h1>
          <p className="text-gray-600">
            And we will get back to you within 24 working hours.
          </p>
        </div>
        <div className="h-full w-full min-h-[300px] min-w-[300px]">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_86lmpoql.json"
            // style={{ minHeight: "450px", minWidth: "450px" }}
          >
            <Controls />
          </Player>
        </div>
        <div>
          <Socials />
        </div>
      </div>
      <div className="h-full flex flex-col justify-around gap-y-14 p-10 w-full bg-red-500/40 rounded-md mb-32">
        <div>
          <h1 className="text-white text-lg">Name</h1>
          <Input
            variant="filled"
            placeholder="Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            value={name}
          />
        </div>
        <div>
          <h1 className="text-white">Email</h1>
          <Input
            type="email"
            variant="filled"
            placeholder="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
          />
        </div>
        <div>
          <h1 className="text-white">Message</h1>
          <Textarea
            variant="filled"
            placeholder="Message"
            minRows={4}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            value={message}
          />
        </div>
        <div>
          <Button label="Submit" onClick={(e) => sendEmail(e)} />
        </div>
      </div>
      <Dialog
        opened={active}
        withCloseButton
        onClose={() => setActive(false)}
        position={{ bottom: 20, right: 20 }}
        className="flex bg-green-100"
      >
        <CheckIcon className="w-5 h-5 m-2 text-green-500" />
        <p className="m-2 text-green-600 font-medium">Enrolment Success</p>
      </Dialog>
    </div>
  );
}

export default ContactWidget;
