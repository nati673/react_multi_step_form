import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";
function StepThree({
  handleChange,
  formData,
  setFormData,
  prevStep,
  nextStep,
  step,
}) {
  // Function to handle checkbox changes
  // Function to handle checkbox changes
  const handleCheckboxChange = (addOns) => (e) => {
    const isChecked = e.target.checked;
    let updatedAddOns = [...formData.add_ons];

    if (isChecked) {
      // Add the add-on if checked
      updatedAddOns.push({ name: addOns.name, price: addOns.price });
    } else {
      // Remove the add-on if unchecked by filtering out the one with the same name
      updatedAddOns = updatedAddOns.filter((item) => item.name !== addOns.name);
    }

    // Update the formData state with the new add_ons array
    setFormData({ ...formData, add_ons: updatedAddOns });
  };

  const data = [
    {
      id: 1,
      name: "Online Service",
      description: "Access to multiplayer game",
      price: "+$1/mo",
      type: "monthly",
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
      type: "monthly",
    },
    {
      id: 3,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
      type: "monthly",
    },
    {
      id: 4,
      name: "Online Service",
      description: "Access to multiplayer game",
      price: "+$10/yr",
      type: "yearly",
    },
    {
      id: 5,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "+$20/yr",
      type: "yearly",
    },
    {
      id: 6,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "+$20/yr",
      type: "yearly",
    },
  ];
  // formData.add_ons = ["Online Service", "Larger storage"];
  return (
    <div className="lg:ml-[90px]  items-center ">
      <Header
        title={"Pick add-ons"}
        text={"Add-ons help enhance your gaming experience."}
      />

      <div className="flex flex-col">
        {data
          .filter((data) =>
            formData.plan_type === "monthly"
              ? data.type === "monthly"
              : data.type === "yearly"
          )
          .map((data) => (
            <div className="flex items-center mt-4   cursor-pointer">
              <label className="w-full space-x-4">
                <div
                  className={`cursor-pointer p-4 flex items-center justify-between rounded-lg
    ${
      formData.add_ons.some((item) => item.name === data.name)
        ? "bg-[#F8F9FE] border-[#8682bb]"
        : "bg-white border-gray-200"
    }
    hover:border-blue-500 border`}
                >
                  <div className="flex items-center mr-[90px]">
                    <input
                      type="checkbox"
                      className="w-5 h-5 mr-6"
                      checked={formData.add_ons.some(
                        (item) => item.name === data.name
                      )}
                      onChange={handleCheckboxChange(data)}
                    />

                    <div>
                      <h3 className="text-[16px] font-semibold text-blue-900 font-ub">
                        {data.name}
                      </h3>
                      <p className="text-gray-400 text-[12px] lg:text-[14px] font-reg">
                        {data.description}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-blue-600 text-[13px] font-reg">
                      {data.price}
                    </p>
                  </div>
                </div>
              </label>
            </div>
          ))}
      </div>
      <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
    </div>
  );
}

export default StepThree;
