// CreateEmployeeForm.js

"use client";
import React, { useState, useEffect } from "react";
import InputTextField from "./InputTextField";
import RadioButton from "./RadioButton";

export default function CreateEmployeeForm({
  onFormSubmit,
  initialData,
  selectedEmployee,
}) {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    unit: "",
    designation: "",
    status: "",
  });

  useEffect(() => {
    if (selectedEmployee || initialData) {
      setFormData(selectedEmployee ? selectedEmployee : initialData);
    } else {
      setFormData({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        unit: "",
        designation: "",
        status: "",
      });
    }
  }, [selectedEmployee, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    if (
      name === "first_name" ||
      name === "middle_name" ||
      name === "last_name"
    ) {
      if (name === "middle_name") {
        updatedFormData.fullname = `${updatedFormData.first_name} ${value
          .charAt(0)
          .toUpperCase()}. ${updatedFormData.last_name}`;
      } else {
        updatedFormData.fullname = `${updatedFormData.first_name} ${
          updatedFormData.middle_name
            ? updatedFormData.middle_name.charAt(0).toUpperCase() + "."
            : ""
        } ${updatedFormData.last_name}`;
      }
    }

    setFormData(updatedFormData);
  };

  const isFormValid = () => {
    return (
      formData.first_name.trim() !== "" &&
      formData.middle_name.trim() !== "" &&
      formData.last_name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.unit.trim() !== "" &&
      formData.designation.trim() !== "" &&
      formData.status.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Incomplete or invalid form data");
      return;
    }

    console.log("Submitting form data:", formData);

    onFormSubmit(formData);

    setFormData({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      unit: "",
      designation: "",
      status: "",
    });

    console.log("Successfully passed form data to employee card");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto bg-white p-6 shadow-md rounded-md grid grid-cols-2 gap-8"
      >
        <InputTextField
          name="first_name"
          placeholder={initialData ? initialData.first_name : "First Name"}
          onChange={handleInputChange}
          value={formData.first_name}
          className="mb-4"
        />
        <InputTextField
          name="middle_name"
          placeholder={initialData ? initialData.middle_name : "Middle Name"}
          onChange={handleInputChange}
          value={formData.middle_name}
          className="mb-4"
        />
        <InputTextField
          name="last_name"
          placeholder={initialData ? initialData.last_name : "Last Name"}
          onChange={handleInputChange}
          value={formData.last_name}
          className="mb-4"
        />
        <InputTextField
          name="email"
          placeholder={initialData ? initialData.email : "Email"}
          onChange={handleInputChange}
          value={formData.email}
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
              checked={formData.unit === "Basic Education"}
            />
            <RadioButton
              labelname="higher_education"
              labeltext="Higher Education"
              name="unit"
              value="Higher Education"
              onChange={handleInputChange}
              checked={formData.unit === "Higher Education"}
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
              checked={formData.designation === "NTP"}
            />
            <RadioButton
              labelname="academic_faculty"
              labeltext="Academic Faculty"
              name="designation"
              value="Academic Faculty"
              onChange={handleInputChange}
              checked={formData.designation === "Academic Faculty"}
            />
            <RadioButton
              labelname="formation_faculty"
              labeltext="Formation Faculty"
              name="designation"
              value="Formation Faculty"
              onChange={handleInputChange}
              checked={formData.designation === "Formation Faculty"}
            />
            <RadioButton
              labelname="non_teaching_faculty"
              labeltext="Non-Teaching Faculty"
              name="designation"
              value="Non-Teaching Faculty"
              onChange={handleInputChange}
              checked={formData.designation === "Non-Teaching Faculty"}
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
              checked={formData.status === "Active"}
            />
            <RadioButton
              labelname="inactive"
              labeltext="Inactive"
              name="status"
              value="Inactive"
              onChange={handleInputChange}
              checked={formData.status === "Inactive"}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2 ${
            !isFormValid() && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          {initialData ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}
