import React from "react";
import Buttons from "./Buttons";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import Header from "./Header";
function StepTwo({
  handleChange,
  formData,
  setFormData,
  prevStep,
  nextStep,
  step,
}) {
  const handleToggle = () => {
    const newPlanType = formData.plan_type === "monthly" ? "yearly" : "monthly";
    handleChange("plan_type")({ target: { value: newPlanType } });
  };
  const plans = [
    {
      id: 1,
      name: "Arcade",
      icon: ArcadeIcon,
      price: "$9/mo",
      discount: "",
      type: "monthly",
    },
    {
      id: 2,
      name: "Advanced",
      icon: AdvancedIcon,
      price: "$12/mo",
      discount: "",
      type: "monthly",
    },
    {
      id: 3,
      name: "Pro",
      icon: ProIcon,
      price: "$15/mo",
      discount: "",
      type: "monthly",
    },

    {
      id: 4,
      name: "Arcade",
      icon: ArcadeIcon,
      price: "$90/yr",
      discount: "2 months free",
      type: "yearly",
    },
    {
      id: 5,
      name: "Advanced",
      icon: AdvancedIcon,
      price: "$120/yr",
      discount: "2 months free",
      type: "yearly",
    },
    {
      id: 6,
      name: "Pro",
      icon: ProIcon,
      price: "$150/yr",
      discount: "2 months free",
      type: "yearly",
    },
  ];
  return (
    <div className="lg:ml-[90px]  items-center justify-center">
      <Header
        title={"Select your plan"}
        text={"You have the option of monthly or yearly billing."}
      />

      <div className="flex flex-col">
        <div className="mt-8 flex flex-col lg:flex-row ">
          {plans
            .filter((plan) =>
              formData.plan_type === "monthly"
                ? plan.type === "monthly"
                : plan.type === "yearly"
            )
            .map((plan) => (
              <div className="mr-[15px]">
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name={plan.name}
                    required
                    class="hidden peer"
                    checked={formData.plan.name === plan.name}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        plan: { name: plan.name, price: plan.price },
                      })
                    }
                    value={formData.plan.name}
                  />

                  <div className="bg-white w-[100%] lg:w-[130px] p-3 lg:mb-0 mb-4 rounded-lg border  hover:border-blue-500 border-gray-200  hover:peer-checked:ring-blue-500 peer-checked:bg-[#F8F9FE]  peer-checked:ring-[0.7px] peer-checked:ring-blue-500">
                    <div class="flex flex-row lg:flex-col  items-start text-left ">
                      <div class=" text-white p-2 lg:mb-8  rounded-full">
                        <img src={plan.icon} alt="advanced icon" />
                      </div>
                      <div className="">
                        <h3 class="font-ub text-[#02254A]">{plan.name}</h3>
                        <p class="text-[#C0C1C7]">{plan.price}</p>

                        {plan.discount && (
                          <p class="text-blue-800 font-reg text-[13px]">
                            {plan.discount}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
        </div>
        <div className="bg-[#F8F9FE] rounded-lg h-[30px] mt-7 flex flex-row items-center justify-around p-5 sm:pl-[10px] sm:pr-[10px] w-full lg:pl-[90px] lg:pr-[90px]">
          <h2
            className={`font-ub text-[14px] ${
              formData.plan_type === "monthly"
                ? "text-[#02254A]"
                : "text-[#C0C1C7]"
            }`}
          >
            Monthly
          </h2>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toggle"
                type="checkbox"
                className="sr-only peer"
                checked={formData.plan_type === "yearly"}
                onChange={handleToggle}
              />
              <div className="w-9 h-5 bg-[#03285C] rounded-full peer-checked:bg-[#03285C] peer-focus:ring-2 peer-focus:ring-[#03285C]"></div>
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></div>
            </div>
          </label>
          <h2
            className={`font-ub text-[14px] ${
              formData.plan_type === "yearly"
                ? "text-[#02254A]"
                : "text-[#C0C1C7]"
            }`}
          >
            Yearly
          </h2>
        </div>
      </div>
      <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
    </div>
  );
}

export default StepTwo;
