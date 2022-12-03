import React, { useState } from "react";

export const useStepForm = (steps: React.ReactNode[]) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const step = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // Go to previous step
  const backStep = () => {
    setCurrentStep((curr) => (curr <= 0 ? curr : curr - 1));
  };

  // Go to next step
  const nextStep = () => {
    setCurrentStep((curr) => (curr >= steps.length - 1 ? curr : curr + 1));
  };

  // Go to specific step
  const goToStep = (idx: number) => {
    setCurrentStep(idx);
  };

  return {
    steps,
    step,
    currentStep,
    backStep,
    nextStep,
    goToStep,
    isFirstStep,
    isLastStep,
  };
};
