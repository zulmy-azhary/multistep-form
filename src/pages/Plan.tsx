import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { PlanForm } from "../components";
import { Header, Heading, SubHeader, Text } from "../styles/SharedComponents";
import type { Period } from "../types";

const ChoosePlan = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    flex-direction: row;
    column-gap: 1rem;
    justify-content: space-between;
    margin-top: 2.5rem;
  }
`;

const PeriodWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 2rem;
  background-color: var(--alabaster);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
  padding: 1.5rem 0;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    margin-top: 2rem;
  }
`;

const PeriodText = styled(Text)<{ isChecked: boolean }>`
  color: var(--${(props) => (props.isChecked ? "marineBlue" : "coolGray")});
`;

const Toggle = styled.div<{ checked: boolean }>`
  --height: 18px;
  --width: calc(var(--height) * 2);

  cursor: pointer;
  text-indent: -9999px;
  width: var(--width);
  height: var(--height);
  background-color: var(--marineBlue);
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: ${(props) => (props.checked ? "calc(70% - 14%)" : "10%")};
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--height) / 1.5);
    height: calc(var(--height) / 1.5);
    border-radius: 50%;
    background: #fff;
    transition: 0.2s;
  }
`;

const Plan: React.FC = () => {
  const { register, setValue, getValues } = useFormContext();
  const [period, setPeriod] = useState<Period>(getValues("period") as Period);
  const isYearly = period === "Yearly";
  const periodChange = () => {
    setPeriod((prev) => {
      const result: Period = prev === "Monthly" ? "Yearly" : "Monthly";

      setValue("period", result);
      return result;
    });
  };

  return (
    <>
      <Heading>
        <Header>Select your plan</Header>
        <SubHeader>You have the option of monthly or yearly billing.</SubHeader>
      </Heading>
      <ChoosePlan>
        <PlanForm option={{ name: "Arcade", price: 9 }} />
        <PlanForm option={{ name: "Advanced", price: 12 }} />
        <PlanForm option={{ name: "Pro", price: 15 }} />
      </ChoosePlan>
      <PeriodWrapper>
        <PeriodText isChecked={!isYearly}>Monthly</PeriodText>
        <Toggle checked={isYearly} onClick={periodChange}>
          <input
            type="checkbox"
            defaultValue={period}
            checked={isYearly}
            {...register("period")}
            aria-label="Period toggle"
          />
        </Toggle>
        <PeriodText isChecked={isYearly}>Yearly</PeriodText>
      </PeriodWrapper>
    </>
  );
};

export default Plan;
