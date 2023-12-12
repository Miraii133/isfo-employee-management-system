import React from "react";
import Image from "next/image";

const EmployeeCard = ({
  picture,
  fullname,
  email,
  unit,
  designation,
  status,
}) => {
  return (
    <div className="w-[18.75rem] h-[28.125rem] rounded-[0.9375rem] bg-white border-4 border-transparent drop-shadow-lg">
      <div className="w-full h-[15rem] bg-slate-600 rounded-[0.5rem] relative">
        <Image
          className="rounded-[0.5rem] object-center"
          fill={true}
          src={picture}
          alt="Employee Picture"
          style={{ objectFit: "cover" }}
        />
      </div>

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
          <h3 className="text-sm border rounded-full inline-block px-5 py-[0.5px]">
            {unit}
          </h3>
          <h3 className="text-sm border rounded-full inline-block px-5 py-[0.5px]">
            {designation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
