import React from "react";

function Buttons({ step, prevStep, nextStep, confirm }) {
  return (
    <div className="lg:block hidden">
      <div className="flex  flex-row items-center justify-between mt-[130px] ">
        {step !== 1 ? (
          <button
            className=" text-[#9e9ea8] font-medium hover:text-[#03295A] py-2 px-4 rounded-md"
            onClick={() => prevStep(false)}
          >
            Go Back
          </button>
        ) : (
          <div className="block"></div>
        )}
        {confirm && confirm === "true" ? (
          <button
            className="bg-[#483EFF] text-[#ffffff] font-medium py-2 px-4 rounded-md h-[44px] hover:bg-[#938CFE] transition duration-300 ease-in-out"
            onClick={nextStep}
          >
            Confirm
          </button>
        ) : (
          <button
            className="bg-[#03295A] text-[#c5d3e3] font-medium py-2 px-4 rounded-md h-[44px] hover:bg-[#174A8B] hover:text-[#ffffff] transition duration-300 ease-in-out"
            onClick={nextStep}
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}

export default Buttons;
