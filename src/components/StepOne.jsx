import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";

function StepOne({ handleChange, formData, prevStep, nextStep, step }) {
  return (
    <div className="ml-[90px] items-center justify-center">
      <Header
        title={"Personal info"}
        text={"Please provide your name, email address, and phone number."}
      />
      <div className="mt-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-[#094980]"
        >
          Name
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange("name")}
            type="text"
            placeholder="e.g. Stephen King"
            className="block w-full rounded-md border-0 py-[10px] pl-4 font-medium	 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-[#094980]"
        >
          Email Address
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
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
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-[#094980]"
        >
          Phone Number
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
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
