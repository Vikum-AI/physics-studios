import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Input, Textarea } from "@mantine/core";
import React from "react";
import Button from "../../components/button/Button";
import Socials from "../../components/socials/Socials";

function ContactWidget() {
  return (
    <div className="h-[70vh] relative -top-14 flex justify-around">
      <div className="flex flex-col justify-around rounded-md p-10">
        <div>
          <h1 className="text-3xl font-medium text-gray-800">
            Fill out the form
          </h1>
          <p className="text-gray-600">
            And we will get back to you within 24 working hours.
          </p>
        </div>
        <div>
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_86lmpoql.json"
            style={{ height: "450px", width: "450px" }}
            className="main-player"
          >
            <Controls />
          </Player>
        </div>
        <div>
          <Socials />
        </div>
      </div>
      <div
        className="h-full flex flex-col justify-around p-10 w-[30vw] 
        bg-gray-500
      rounded-md"
      >
        <div>
          <h1 className="text-white text-lg">Name</h1>
          <Input variant="filled" placeholder="Name" />
        </div>
        <div>
          <h1 className="text-gray-300">Email</h1>
          <Input type="email" variant="filled" placeholder="Email" />
        </div>
        <div>
          <h1 className="text-gray-300">Message</h1>
          <Textarea variant="filled" placeholder="Message" minRows={4} />
        </div>
        <div>
          <Button label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default ContactWidget;
