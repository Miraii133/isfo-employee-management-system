"use client";
import React from "react";
import InputTextField from "./InputTextField";
import RadioButton from "./RadioButton";
import InputTypeFile from "./InputTypeFile";
import { useState } from "react";

const CreateEmployeeForm = () => {
  //first is to initialize variables for the form
  //wherein data like first_name: "is still a null string"
  //this initialization will be stored in the formData
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    unit: "",
    designation: "",
    status: "",
    employee_pic: null,
  });
  console.log(formData);
  //function handleInputChange will handle for changes in the data
  //sample is first_name: "John Big D"
  //gets each name, type and value of all input types
  //   const handleInputChange = (e) => {
  //     const { name, value, type } = e.target.value;
  //     //purpose of check_type_value is to check whether if the changes in the Input type is a file for Input Type File or a text or radio
  //     const check_type_value = type === "file" ? e.target.files[0] : value;

  //     setFormData({
  //       ...formData, //this has the stored data of all changes occurred in the form
  //       [name]: value, // Updates the specific field "name" with the new value
  //     });
  //   };
  return (
    <div>
      <form className="w-full mx-auto bg-white p-6 shadow-md rounded-md grid grid-cols-2 gap-8">
        <InputTextField
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          //   onChange={handleInputChange}
          className="mb-4"
        />
        <InputTextField
          name="middle_name"
          placeholder="Middle Name"
          value={formData.middle_name}
          //   onChange={handleInputChange}
          className="mb-4"
        />
        <InputTextField
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          //   onChange={handleInputChange}
          className="mb-4"
        />
        <InputTextField
          name="email"
          placeholder="Email"
          value={formData.email}
          //   onChange={handleInputChange}
          className="mb-6"
        />

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Education Level
          </label>
          <div className="flex space-x-4">
            <RadioButton
              labelname="basic_education"
              labeltext="Basic Education"
              name={formData.unit}
              //   onChange={handleInputChange}
              value="basic_education"
            />
            <RadioButton
              labelname="higher_education"
              labeltext="Higher Education"
              name={formData.unit}
              //   onChange={handleInputChange}
              value="higher_education"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Designation
          </label>
          <div className="flex space-x-4">
            <RadioButton
              labelname="ntp"
              labeltext="NTP"
              name={formData.designation}
              //   onChange={handleInputChange}
              value="ntp"
            />
            <RadioButton
              labelname="academic_faculty"
              labeltext="Academic Faculty"
              name={formData.designation}
              //   onChange={handleInputChange}
              value="academic_faculty"
            />
            <RadioButton
              labelname="formation_faculty"
              labeltext="Formation Faculty"
              name={formData.designation}
              //   onChange={handleInputChange}
              value="formation_faculty"
            />
            <RadioButton
              labelname="non_teaching_faculty"
              labeltext="Non-Teaching Faculty"
              name={formData.designation}
              //   onChange={handleInputChange}
              value="non_teaching_faculty"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <div className="flex space-x-4">
            <RadioButton
              labelname="active"
              labeltext="Active"
              name={formData.status}
              //   onChange={handleInputChange}
              value="active"
            />
            <RadioButton
              labelname="inactive"
              labeltext="Inactive"
              name={formData.status}
              //   onChange={handleInputChange}
              value="inactive"
            />
          </div>
        </div>

        <InputTypeFile
          labelname="employee_picture"
          labeltext="Employee Picture"
          name={formData.employee_picture}
          //   onChange={handleInputChange}
          className="mb-6"
        />

        <button
          type="create_employee"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
        >
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployeeForm;
