import React from "react";

export default function MainInfo() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold m-4">
        A Simple Platform for All your Physics Learning Needs.
      </h1>
      <div className="flex items-center m-4">
        <div className="bg-gray-200 flex items-center p-1 rounded-sm">
          <h1 className="m-1">1:1 Teaching</h1>
          <div className="bg-gray-400 h-4 w-[2px]"></div>
          <h1 className="m-1">Practice Exams</h1>
        </div>
      </div>
    </div>
  );
}
