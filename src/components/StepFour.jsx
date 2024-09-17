import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";
function StepFour({
  handleChange,
  formData,
  setFormData,
  prevStep,
  nextStep,
  step,
}) {
  const calculateTotalPrice = () => {
    const addOnsTotal = formData.add_ons.reduce((total, addOn) => {
      const priceValue = parseFloat(addOn.price.replace(/[^\d.]/g, "")) || 0;
      console.log("priceValue", priceValue);
      return total + priceValue;
    }, 0);
    const planTotal = formData.plan.price
      ? parseFloat(formData.plan.price.replace(/[^\d.]/g, "")) || 0
      : 0;
    const total = addOnsTotal + planTotal;
    const formattedTotal =
      formData.plan_type === "monthly" ? `+$${total}/mo` : `+$${total}/yr`;
    return formattedTotal;
  };

  return (
    <div className="ml-[90px] items-center ">
      <Header
        title={"Finishing up"}
        text={"Double-check everything looks OK before confirming."}
      />

      <div className="flex flex-col ">
        <div className="flex items-center mt-4">
          <div
            className={`cursor-pointer bg-[#ffffff] min-w-full  rounded-lg hover:border-blue-500`}
          >
            <div
              className={`cursor-pointer bg-[#F8F9FE] justify-between rounded-lg hover:border-blue-500`}
            >
              <div className="flex items-center p-4">
                <div className="flex items-center mr-[170px]">
                  <div>
                    <h3 className="text-[16px] font-semibold text-blue-900 font-ub">
                      {`${formData.plan.name} (${
                        formData.plan_type.charAt(0).toUpperCase() +
                        formData.plan_type.slice(1)
                      })`}
                    </h3>
                    <a
                      className="text-gray-600 text-[15px] underline font-reg"
                      onClick={() => prevStep(true)}
                    >
                      Change
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-[#02254A] text-lg font-ub">
                    {formData.plan.price}
                  </p>
                </div>
              </div>

              <hr className="m-4 " />
              <div className="flex flex-col items-center mt-4 p-4 ">
                {formData.add_ons.map((addOns, index) => (
                  <div className="flex flex-row items-center justify-between w-full mb-2">
                    <p className="text-gray-400 text-[15px]  font-reg">
                      {addOns.name}
                    </p>
                    <p className="text-[#02254A] text-[16px] font-reg">
                      {addOns.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 p-4 ">
              <div className="flex flex-row items-center justify-between w-full mb-2">
                <p className="text-gray-400 text-[15px]  font-reg">
                  {`Total (per ${
                    formData.plan_type === "monthly" ? "month" : "year"
                  })`}
                </p>
                <h3 className="text-[#483EFF] text-[19px] font-ub">
                  {calculateTotalPrice()}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Buttons
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        confirm={"true"}
      />
    </div>
  );
}

export default StepFour;
