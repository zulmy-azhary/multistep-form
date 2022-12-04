import React, { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Text } from "../styles/SharedComponents";
import type { Option } from "../types";

const Container = styled.div<{ isChecked: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1.25rem;
  padding: 1rem;
  border: 1px solid var(--${(props) => (props.isChecked ? "purplishBlue" : "lightGray")});
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.isChecked && "var(--alabaster)"};

  &:hover {
    outline: 1px solid var(--purplishBlue);
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
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: Option;
  isYearly: boolean;
  price: number;
  selected: Option;
  setSelected: React.Dispatch<React.SetStateAction<Option>>;
}

const PlanForm: React.FC<Props> = (props) => {
  const { title, isYearly, price, selected, setSelected, ...rest } = props;
  const { register, setValue } = useFormContext();
  const isChecked = selected === title;

  const inputChange = useCallback(() => {
    setSelected(title);
    setValue("option", title);
  }, []);

  return (
    <Container isChecked={isChecked} onClick={inputChange}>
      <Input
        {...rest}
        {...register("option")}
        type="radio"
        name="plan"
        value={title}
        onChange={inputChange}
      />
      <Image src={`/images/icon-${title.toLowerCase()}.svg`} alt={`${title} Icon`} />
      <PlanWrapper>
        <PlanText>{title}</PlanText>
        <SubText>{isYearly ? `$${price * 10}/yr` : `$${price}/mo`}</SubText>
        {isYearly && <Discount>2 months free</Discount>}
      </PlanWrapper>
    </Container>
  );
};

export default PlanForm;
