import { useState } from "react";
import FormComponent from "../../core/FormComponent";
import TaskComponent from "../../core/TaskComponent";

const Home = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(() => step + 1);
  };

  const prevStep = () => {
    setStep(() => step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {step === 0 ? (
        <FormComponent nextStep={nextStep} />
      ) : (
        <TaskComponent nextStep={nextStep} prevStep={prevStep} />
      )}
    </div>
  );
};

export default Home;
