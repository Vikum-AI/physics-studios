import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import ICard from "./ICard";

function Card({
  title,
  description,
  secondary,
  Icon,
  iconColor,
  iconSize,
  image,
  extras,
  button,
  tertiary,
  onClick,
}: ICard) {
  return (
    <div
      className={[
        "w-56",
        "p-5",
        "shadow-lg",
        "rounded-md",
        "bg-gray-50",
        `${extras}`,
      ].join(" ")}
    >
      <div
        className={["flex", "items-center", "justify-center", "my-10"].join(
          " "
        )}
      >
        {Icon && <Icon size={iconSize || 50} color={iconColor} />}
        {image ? <Image src={image} alt="image" height={80} width={90} /> : ""}
      </div>
      <h1 className="text-center text-lg mt-2">{title}</h1>
      <div>
        <p className="text-sm text-center text-gray-600 my-2">{description}</p>
        <p className="text-sm text-center text-gray-600 my-2">{secondary}</p>
        <p className="text-sm text-center text-gray-600 my-2">{tertiary}</p>
      </div>
      {button ? (
        <div className="flex justify-center mt-8">
          <Button label={button} onClick={onClick} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Card;
