import React from "react";
import IButton from "./IButton";

export default function Button({
  label,
  Icon,
  extras,
  onClick,
  iconStyles,
}: IButton) {
  return (
    <button
      onClick={onClick}
      className={[
        "bg-red-500",
        "p-1",
        "px-3",
        "font-medium",
        "text-sm",
        "text-white",
        "rounded-[4px]",
        "hover:bg-red-600",
        "transition",
        "duration-400",
        `${extras}`,
      ].join(" ")}
    >
      {label}
      {Icon && <Icon className={iconStyles} />}
    </button>
  );
}
