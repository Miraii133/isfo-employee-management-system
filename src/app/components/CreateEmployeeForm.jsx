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
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    unit: "",
    designation: "",
    employeeStatus: "",
  });

  useEffect(() => {
    if (selectedEmployee || initialData) {
      setFormData(selectedEmployee ? selectedEmployee : initialData);
    } else {
      setFormData({
        id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        unit: "",
        designation: "",
        employeeStatus: "",
      });
    }
  }, [selectedEmployee, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    if (name === "firstName" || name === "middleName" || name === "lastName") {
      if (name === "middleName") {
        updatedFormData.fullname = `${updatedFormData.firstName} ${value
          .charAt(0)
          .toUpperCase()}. ${updatedFormData.lastName}`;
      } else {
        updatedFormData.fullname = `${updatedFormData.firstName} ${
          updatedFormData.middleName
            ? updatedFormData.middleName.charAt(0).toUpperCase() + "."
            : ""
        } ${updatedFormData.lastName}`;
      }
    }

    setFormData(updatedFormData);
  };

  const isFormValid = () => {
    return (
      (formData.firstName ?? "").trim() !== "" &&
      (formData.middleName ?? "").trim() !== "" &&
      (formData.lastName ?? "").trim() !== "" &&
      (formData.email ?? "").trim() !== "" &&
      (formData.unit ?? "").trim() !== "" &&
      (formData.designation ?? "").trim() !== "" &&
      (formData.employeeStatus ?? "").trim() !== ""
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

    // Reset form data only if it's a new submission (not an update)
    if (!selectedEmployee && !initialData) {
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        unit: "",
        designation: "",
        employeeStatus: "",
      });
    }

    console.log("Successfully passed form data to employee card");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto bg-white p-6 shadow-md rounded-md grid grid-cols-2 gap-8"
      >
        <InputTextField
          name="firstName"
          placeholder={initialData ? initialData.firstName : "First Name"}
          onChange={handleInputChange}
          value={formData.firstName}
          className="mb-4"
        />
        <InputTextField
          name="middleName"
          placeholder={initialData ? initialData.middleName : "Middle Name"}
          onChange={handleInputChange}
          value={formData.middleName}
          className="mb-4"
        />
        <InputTextField
          name="lastName"
          placeholder={initialData ? initialData.lastName : "Last Name"}
          onChange={handleInputChange}
          value={formData.lastName}
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
              name="employeeStatus"
              value="Active"
              onChange={handleInputChange}
              checked={formData.employeeStatus === "Active"}
            />
            <RadioButton
              labelname="inactive"
              labeltext="Inactive"
              name="employeeStatus"
              value="Inactive"
              onChange={handleInputChange}
              checked={formData.employeeStatus === "Inactive"}
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
