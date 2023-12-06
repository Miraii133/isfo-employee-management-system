import React from "react";

const InputTypeFile = ({ name, labelname, labeltext }) => {
  return (
    <div>
      <label className="block" htmlFor={labelname}>
        {labeltext}
      </label>
      <input type="file" name={name} />
    </div>
  );
};

export default InputTypeFile;
