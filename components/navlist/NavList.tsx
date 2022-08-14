import Link from "next/link";
import React from "react";
import NavListData from "../../const/NavListData";

export default function NavList() {
  return (
    <ul className="flex justify-around w-full">
      {NavListData.map((item) => (
        <li key={item.id} className="p-2 text-md hover:text-red-600 rounded-md">
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
