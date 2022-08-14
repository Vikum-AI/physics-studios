import React from "react";
import IDivider from "./IDivider";

export default function Divider({ color, extras }: IDivider) {
  return (
    <div
      className={["w-full", "bg-gray-200", "h-[1px]", `${extras}`].join(" ")}
    ></div>
  );
}
