import React from "react";

const InputTypeFile = ({ name, labelname, labeltext, onChange }) => {
  return (
    <div>
      <label className="block" htmlFor={labelname}>
        {labeltext}
      </label>
      <input type="file" name={name} onChange={onChange} />
    </div>
  );
};

export default InputTypeFile;
