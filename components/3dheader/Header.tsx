import React from "react";
import IHeader from "./IHeader";

export default function Header({ label, extras }: IHeader) {
  return (
    <div className={`relative w-full h-20 mb-20 ${extras}`}>
      <h3 className="text-7xl font-bold mx-6 text-gray-200">{label}</h3>
      <h3 className="text-7xl font-bold m-6 text-gray-700 absolute -top-2 sm:left-5">
        {label}
      </h3>
    </div>
  );
}
