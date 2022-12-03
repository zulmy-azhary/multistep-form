import React from "react";
import styled from "styled-components";

const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 0.875rem 1.25rem;
  border: none;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: ${props => props.theme.media.tablet}){
    font-size: 1rem;
    font-weight: 500;
  }
`;

const ButtonBack = styled(Button)`
  background-color: transparent;
  color: var(--coolGray);

  &:hover {
    color: var(--marineBlue);
  }
`;

const ButtonNext = styled(Button)`
  background-color: var(--marineBlue);
  color: var(--magnolia);
  margin-left: auto;

  &:hover {
    background-color: hsla(213, 96%, 18%, 0.875);
  }
`;

interface Props {
  backStep: () => void;
  nextStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const StepForm: React.FC<Props> = ({ backStep, nextStep, isFirstStep, isLastStep }) => {
  return (
    <StepWrapper>
      {!isFirstStep && <ButtonBack onClick={backStep} type="button">Go Back</ButtonBack>}
      <ButtonNext onClick={nextStep} type="button">{isLastStep ? "Confirm" : "Next Step"}</ButtonNext>
    </StepWrapper>
  );
};

export default StepForm;
