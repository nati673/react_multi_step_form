import React, { useState } from "react";
import StepCard from "../components/StepCard";
import Forms from "../components/Forms";
import MobileStepCard from "../components/MobileStepCard";
import MobileButtons from "../components/MobileButtons";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    plan: { name: "Arcade", price: "$9/mo" },

    add_ons: [
      {
        name: "Online Service",
        price: "+$1/mo",
      },
    ],
    plan_type: "monthly",
  });
  const [errors, setErrors] = useState({});

  const validateStepOne = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "This field is required";
    if (!formData.email.trim()) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.phone_number.trim()) {
      errors.phone_number = "This field is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStepOne()) {
      setStep(step + 1);
    } else if (step !== 1) {
      setStep(step + 1);
    }
  };
  const prevStep = (goToPlan) => setStep(goToPlan ? step - 2 : step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <>
      <MobileStepCard step={step} />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-4 shadow-md lg:mt-0 mt-[-70vh] lg:w-3/5 w-[90%] h-fit flex items-center rounded-2xl">
          <div className="flex flex-col lg:flex-row w-full  items-center">
            <StepCard step={step} />

            <Forms
              step={step}
              handleChange={handleChange}
              formData={formData}
              formErrors={errors}
              setFormData={setFormData}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </div>
        </div>
      </div>
      <MobileButtons
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        confirm={step === "5" ? "true" : "false"}
      />
    </>
  );
}

export default MultiStepForm;
