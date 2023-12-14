import React from "react";
import InputTextField from "./InputTextField";
import RadioButton from "./RadioButton";
import InputTypeFile from "./InputTypeFile";

const Form = () => {
  return (
    <div>
      <form class="w-full mx-auto bg-white p-6 shadow-md rounded-md grid grid-cols-2 gap-8">
        <InputTextField
          name="first_name"
          placeholder="First Name"
          value="first_name"
          class="mb-4"
        />
        <InputTextField
          name="middle_name"
          placeholder="Middle Name"
          value="middle_name"
          class="mb-4"
        />
        <InputTextField
          name="last_name"
          value="last_name"
          placeholder="Last Name"
          class="mb-4"
        />
        <InputTextField
          name="email"
          value="email"
          placeholder="Email"
          class="mb-6"
        />

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Education Level
          </label>
          <div class="flex space-x-4">
            <RadioButton
              labelname="basic_education"
              labeltext="Basic Education"
              name="unit"
              value="basic_education"
            />
            <RadioButton
              labelname="higher_education"
              labeltext="Higher Education"
              name="unit"
              value="higher_education"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Designation
          </label>
          <div class="flex space-x-4">
            <RadioButton
              labelname="ntp"
              labeltext="NTP"
              name="designation"
              value="ntp"
            />
            <RadioButton
              labelname="academic_faculty"
              labeltext="Academic Faculty"
              name="designation"
              value="academic_faculty"
            />
            <RadioButton
              labelname="formation_faculty"
              labeltext="Formation Faculty"
              name="designation"
              value="formation_faculty"
            />
            <RadioButton
              labelname="non_teaching_faculty"
              labeltext="Non-Teaching Faculty"
              name="designation"
              value="non_teaching_faculty"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <div class="flex space-x-4">
            <RadioButton
              labelname="active"
              labeltext="Active"
              name="status"
              value="active"
            />
            <RadioButton
              labelname="inactive"
              labeltext="Inactive"
              name="status"
              value="inactive"
            />
          </div>
        </div>

        <InputTypeFile
          labelname="employee_picture"
          labeltext="Employee Picture"
          name="employee_picture"
          value="employee_picture"
          class="mb-6"
        />

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
