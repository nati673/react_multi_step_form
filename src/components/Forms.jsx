import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Thank from "./Thank";

function Forms({ step, handleChange,formData, formErrors, setFormData, prevStep, nextStep }) {
  switch (step) {
    case 1:
      return (
        <StepOne
          handleChange={handleChange}
          formData={formData}
          formErrors={formErrors}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      );
    case 2:
      return (
        <StepTwo
          handleChange={handleChange}
          formData={formData}
          formErrors={formErrors}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      );
    case 3:
      return (
        <StepThree
          handleChange={handleChange}
          formData={formData}
          formErrors={formErrors}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      );
    case 4:
      return (
        <StepFour
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      );
    case 5:
      return (
        <Thank
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      );
      
    default:
      return <h1>Unknown step</h1>;
  }
}

export default Forms;
