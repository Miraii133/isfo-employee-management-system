import React from "react";

const RadioButton = ({ name, value, labelname, labeltext }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        className="text-blue-500 focus:ring-black"
      />
      <label htmlFor={labelname}>{labeltext}</label>
    </div>
  );
};

export default RadioButton;
