import React from "react";

const InputTextField = ({ name, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="border-2 rounded-md p-2 w-[20rem] focus:outline-none focus:border-black"
      />
    </div>
  );
};

export default InputTextField;
