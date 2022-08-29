import React from "react";
import IHeader from "./IHeader";

export default function Header({ label, extras }: IHeader) {
  return (
    <div className={`${extras}`}>
      <h1 className="text-7xl font-bold m-6 text-gray-200">{label}</h1>
      <h1 className="text-7xl font-bold m-6 text-gray-700 relative -top-20 left-5">
        {label}
      </h1>
    </div>
  );
}
