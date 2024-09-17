import React from "react";

function Buttons({ step, prevStep, nextStep, confirm }) {
  return (
    <div className="flex flex-row items-center justify-between mt-[30px] ">
      {step !== 1 ? (
        <button
          className=" text-[#9e9ea8] font-medium hover:text-[#03295A] py-2 px-4 rounded-md"
          onClick={() => prevStep(false)}
        >
          Go Back
        </button>
      ) : (
        <div></div>
      )}
      {confirm && confirm === "true" ? (
        <button
          className="bg-[#483EFF] text-[#ffffff] font-medium py-2 px-4 rounded-md h-[44px]"
          onClick={nextStep}
        >
          Confirm
        </button>
      ) : (
        <button
          className="bg-[#03295A] text-[#c5d3e3] font-medium py-2 px-4 rounded-md h-[44px]"
          onClick={nextStep}
        >
          Next Step
        </button>
      )}
    </div>
  );
}

export default Buttons;
