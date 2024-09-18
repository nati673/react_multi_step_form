import React from "react";
import bg from "../assets/images/bg-sidebar-mobile.svg";

function MobileStepCard({ step }) {
  const steps = [
    {
      name: "Your Info",
      step_number: "1",
    },
    {
      name: "Select plan",
      step_number: "2",
    },
    {
      name: "Add-ons",
      step_number: "3",
    },
    {
      name: "Summary",
      step_number: "4",
    },
  ];

  return (
    <div
      className="block lg:hidden h-[220px] bg-cover bg-center w-full p-9"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Center the step numbers */}
      <div className="flex justify-center items-center mt-[-53px]  h-full w-full">
        <div className="flex justify-between w-3/6 max-w-md">
          {steps.map((stepItem, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`rounded-full ${
                  step === Number(stepItem.step_number)
                    ? "bg-[#bfe2ff]"
                    : "border-neutral-50 border text-white"
                } w-8 h-8 flex items-center justify-center`}
              >
                <p className="font-ub text-[14px]">{stepItem.step_number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileStepCard;
