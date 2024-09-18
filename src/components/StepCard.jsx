import React from "react";
import bg from "../assets/images/bg-sidebar-desktop.svg";
function StepCard({ step }) {
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
      className="hidden lg:block h-[560px] bg-cover bg-center  w-[280px] p-9 pt-3 rounded-xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col">
        {steps.map((stepItem, index) => (
          <div
            key={index}
            className="flex flex-row align-middle items-center mt-6"
          >
            <div
              className={`rounded-full ${
                step === Number(stepItem.step_number)
                  ? "bg-[#bfe2ff]"
                  : "border-neutral-50 border text-white"
              } w-8 h-8 text-center`}
            >
              <p className="p-[6.9px] font-ub text-[14px]">
                {stepItem.step_number}
              </p>
            </div>

            <div className="text-left ml-3">
              <p className="font-reg text-[#908DFF] text-xs uppercase ring-offset-cyan-400">
                Step {stepItem.step_number}
              </p>
              <h5 className="font-ub uppercase text-sm text-white tracking-wide">
                {stepItem.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepCard;
