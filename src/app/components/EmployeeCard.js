import React from "react";
import Image from "next/image";

const EmployeeCard = () => {
  return (
    <div className="w-[18.75rem] h-[28.125rem] rounded-[0.9375rem] bg-white border-4 border-transparent drop-shadow-lg">
      <div className="w-full h-[15rem] bg-slate-600 rounded-[0.5rem] relative">
        <Image
          className="rounded-[0.5rem] object-center"
          fill={true}
          src="/sample.jpg"
          alt="Employee Picture"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="pt-8 text-center items-center">
        <h3 className="text-xs">Status</h3>

        <h1 className="text-2xl font-bold">Mariel Mabano</h1>
        <h3 className="text-sm text-gray-400">mgmabano@addu.edu.ph</h3>
        <h3 className="text-sm border rounded-full inline-block px-5 py-[0.5px]">
          Unit
        </h3>
        <h3 className="text-sm border rounded-full inline-block px-5 py-[0.5px]">
          Designation
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;
