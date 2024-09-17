import React, { useState } from "react";
import StepCard from "../components/StepCard";
import Forms from "../components/Forms";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    city: "",
    plan: { name: "", price: "" },

    add_ons: [{ name: "", price: "" }],
    plan_type: "monthly",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = (goToPlan) => setStep(goToPlan ? step - 2 : step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md w-3/5 h-fit flex items-center rounded-2xl">
        <div className="flex flex-row  w-full items-center">
          <StepCard step={step} />
          <Forms
            step={step}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
