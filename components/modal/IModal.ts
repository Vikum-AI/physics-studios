import React from "react";

interface IModal {
  opened: boolean;
  enrolTitle?: any;
  onClick: (...params: any) => any;
  children?: React.ReactNode;
}

export default IModal;
