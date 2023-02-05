import Link from "next/link";
import React from "react";
import NavListData from "../../const/NavListData";
import INavList from "./INavList";

export default function NavList({ extras, liExtras }: INavList) {
  return (
    <ul
      className={["flex", "justify-between", "w-full", `${extras}`].join(" ")}
    >
      {NavListData.map((item) => (
        <li
          key={item.id}
          className={`p-2 text-md hover:text-red-600 rounded-md transition duration-300 text-slate-800 ${liExtras}`}
        >
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
