import { Input } from "@mantine/core";
import React from "react";
import Button from "../../components/button/Button";
import Socials from "../../components/socials/Socials";

function ContactWidget() {
  return (
    <div className="h-[70vh] relative -top-20  flex justify-around bg-green-400">
      <div className="flex flex-col justify-around">
        <div>
          <h1 className="text-3xl">Fill out the form</h1>
          <p>And we will get back to you within 24hours.</p>
        </div>
        <div>contact</div>
        <div>
          <Socials />
        </div>
      </div>
      <div className="h-full flex flex-col justify-around p-10">
        <div>
          <h1>Name</h1>
          <Input variant="filled" />
        </div>
        <div>
          <h1>Email</h1>
          <Input type="email" variant="filled" />
        </div>
        <div>
          <h1>Message</h1>
          <Input variant="filled" />
        </div>
        <Button label="Submit" />
      </div>
    </div>
  );
}

export default ContactWidget;
