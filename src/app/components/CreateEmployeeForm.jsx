"use client";
// Import React
import React, { useState } from "react";

// Import other components
import InputTextField from "./InputTextField";
import RadioButton from "./RadioButton";
import InputTypeFile from "./InputTypeFile";

// Functional component
export default function CreateEmployeeForm({ onFormSubmit }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    unit: "",
    designation: "",
    status: "",
    employee_picture: null,
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;

    // Concatenate first_name, middle_name, and last_name into fullname
    const updatedFormData = {
      ...formData,
      [name]: newValue,
    };

    // If the input fields are first_name, middle_name, or last_name, concatenate them into fullname
    if (
      name === "first_name" ||
      name === "middle_name" ||
      name === "last_name"
    ) {
      if (name === "middle_name") {
        // Get the first letter of the middle name and append a dot
        updatedFormData.fullname = `${updatedFormData.first_name} ${value
          .charAt(0)
          .toUpperCase()}. ${updatedFormData.last_name}`;
      } else {
        // For first_name and last_name, use the existing logic
        updatedFormData.fullname = `${updatedFormData.first_name} ${
          updatedFormData.middle_name
            ? updatedFormData.middle_name.charAt(0).toUpperCase() + "."
            : ""
        } ${updatedFormData.last_name}`;
      }
    }

    setFormData(updatedFormData);
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    // Add specific validation rules as needed
    return (
      formData.first_name.trim() !== "" &&
      formData.middle_name.trim() !== "" &&
      formData.last_name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.unit.trim() !== "" &&
      formData.designation.trim() !== "" &&
      formData.status.trim() !== "" &&
      formData.employee_picture !== null
    );
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Incomplete or invalid form data");
      return;
    }

    // Continue with form submission logic
    console.log("Submitting form data:", formData);

    // Pass form data to the employee card using the prop function
    onFormSubmit(formData);

    // Reset the form fields after submission
    setFormData({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      unit: "",
      designation: "",
      status: "",
      employee_picture: null,
    });

    // Log a success message
    console.log("Successfully passed form data to employee card");
  };

  // JSX to render the form
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto bg-white p-6 shadow-md rounded-md grid grid-cols-2 gap-8"
      >
        <InputTextField
          name="first_name"
          placeholder="First Name"
          onChange={handleInputChange}
          className="mb-4"
        />
        <InputTextField
          name="middle_name"
          placeholder="Middle Name"
          onChange={handleInputChange}
          className="mb-4"
        />
        <InputTextField
          name="last_name"
          placeholder="Last Name"
          onChange={handleInputChange}
          className="mb-4"
        />
        <InputTextField
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
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
              name="unit"
              value="Basic Education"
              onChange={handleInputChange}
            />
            <RadioButton
              labelname="higher_education"
              labeltext="Higher Education"
              name="unit"
              value="Higher Education"
              onChange={handleInputChange}
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
              name="designation"
              value="NTP"
              onChange={handleInputChange}
            />
            <RadioButton
              labelname="academic_faculty"
              labeltext="Academic Faculty"
              name="designation"
              value="Academic Faculty"
              onChange={handleInputChange}
            />
            <RadioButton
              labelname="formation_faculty"
              labeltext="Formation Faculty"
              name="designation"
              value="Formation Faculty"
              onChange={handleInputChange}
            />
            <RadioButton
              labelname="non_teaching_faculty"
              labeltext="Non-Teaching Faculty"
              name="designation"
              value="Non-Teaching Faculty"
              onChange={handleInputChange}
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
              name="status"
              value="Active"
              onChange={handleInputChange}
            />
            <RadioButton
              labelname="inactive"
              labeltext="Inactive"
              name="status"
              value="Inactive"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* InputTypeFile component (adjust as needed) */}
        <InputTypeFile
          labelname="employee_picture"
          labeltext="Employee Picture"
          name="employee_picture"
          value={
            formData.employee_picture ? formData.employee_picture.name : ""
          }
          className="text-gray-700 text-sm font-bold mb-2"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2 ${
            !isFormValid() && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
