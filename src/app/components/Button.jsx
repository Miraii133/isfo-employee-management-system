import React from "react";

const Button = ({ type, buttonname }) => {
  return (
    <div>
      <Button
        type={type}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
      >
        {buttonname}
      </Button>
    </div>
  );
};

export default Button;
