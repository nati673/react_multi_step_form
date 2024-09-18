import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";

function StepOne({
  handleChange,
  formData,
  formErrors,
  prevStep,
  nextStep,
  step,
}) {
  return (
    <div className="ml-[90px] items-center justify-center">
      <Header
        title={"Personal info"}
        text={"Please provide your name, email address, and phone number."}
      />
      <div className="mt-4">
        <div className="flex flex-row justify-between">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-[#094980]"
          >
            Name
          </label>
          {formErrors.name && (
            <p className="text-red-500 text-sm font-ub">{formErrors.name}</p>
          )}
        </div>

        <div
          className={`relative mt-1 ${
            formErrors.name ? " border border-red-500 shadow-none" : ""
          } rounded-md shadow-sm`}
        >
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange("name")}
            type="text"
            placeholder="e.g. Stephen King"
            className={`block w-full rounded-md border-0 py-[10px] pl-4 font-medium	 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row justify-between">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-[#094980]"
          >
            Email Address
          </label>
          {formErrors.email && (
            <p className="text-red-500 text-sm font-ub">{formErrors.email}</p>
          )}
        </div>
        <div
          className={`relative mt-1 ${
            formErrors.email ? " border border-red-500 shadow-none" : ""
          } rounded-md shadow-sm`}
        >
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange("email")}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="block w-full rounded-md border-0 py-[10px] pl-4 font-medium	 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row justify-between">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-[#094980]"
          >
            Phone Number
          </label>
          {formErrors.phone_number && (
            <p className="text-red-500 text-sm font-ub">
              {formErrors.phone_number}
            </p>
          )}
        </div>

        <div
          className={`relative mt-1 ${
            formErrors.phone_number ? " border border-red-500 shadow-none" : ""
          } rounded-md shadow-sm`}
        >
          <input
            id="phone_number"
            name="phone_number"
            type="text"
            value={formData.phone_number}
            onChange={handleChange("phone_number")}
            placeholder="e.g. +1 234 567 890"
            className="block w-full rounded-md border-0 py-[10px] pl-4 font-medium	 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
    </div>
  );
}

export default StepOne;
