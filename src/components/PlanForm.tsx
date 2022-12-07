import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { totalPeriod } from "../helper";
import { Text } from "../styles/SharedComponents";
import type { Option } from "../types";

const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1.25rem;
  padding: 1rem;
  border: 1px solid var(--lightGray);
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;

  &:has(input[type="radio"]:checked) {
    border-color: var(--purplishBlue);
    background-color: var(--alabaster);
  }

  &:hover {
    outline: 1px solid var(--purplishBlue);
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    row-gap: 3rem;
  }
`;

const Input = styled.input`
  display: none;
`;

const Image = styled.img`
  align-self: flex-start;
`;

const PlanWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 0.5rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    align-self: flex-start;
  }
`;

const PlanText = styled(Text)`
  font-size: 1.05rem;
  font-weight: 700;
`;

const SubText = styled(Text)`
  font-size: 0.9rem;
  color: var(--coolGray);
`;

const Discount = styled(Text)`
  font-size: 0.75rem;
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 0.775rem;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  option: Option;
}

const PlanForm: React.FC<Props> = (props) => {
  const { option, ...rest } = props;
  const { name, price } = option;
  const { register, setValue, getValues } = useFormContext();
  const { period } = getValues();

  const inputChange = () => {
    setValue("option", { name, price });
  };

  return (
    <Container type="button" onClick={inputChange}>
      <Input {...rest} {...register("option.name")} type="radio" value={name} />
      <Image src={`/images/icon-${name.toLowerCase()}.svg`} alt={`${name} Icon`} />
      <PlanWrapper>
        <PlanText>{name}</PlanText>
        <SubText>{totalPeriod(period, price)}</SubText>
        {period === "Yearly" && <Discount>2 months free</Discount>}
      </PlanWrapper>
    </Container>
  );
};

export default PlanForm;
