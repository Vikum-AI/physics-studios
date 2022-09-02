import React from "react";

interface IButton {
  label?: string;
  Icon?: React.ElementType;
  iconStyles?: string;
  extras?: string;
  varient?: string;
  onClick?: (...params: any) => any;
}

export default IButton;
