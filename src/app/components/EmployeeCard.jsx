"use client";
import React from "react";

const EmployeeCard = ({
  fullname,
  email,
  unit,
  designation,
  status,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-center w-[18.75rem] h-[10rem] rounded-[0.9375rem] bg-white border-4 border-transparent drop-shadow-lg p-10 cursor-pointer"
      onClick={onClick} // Invoke onClick when the card is clicked
    >
      <div className="pt-8 text-center items-center">
        <h3
          className={`text-sm ${
            status === "Active" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </h3>
        <h1 className="text-lg font-bold">{fullname}</h1>
        <h3 className="text-sm text-gray-400">{email}</h3>
        <div className="p-2 gap-8">
          <h3 className="text-sm border rounded-full inline-block px-5">
            {unit}
          </h3>
          <h3 className="text-sm border rounded-full inline-block px-5">
            {designation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
