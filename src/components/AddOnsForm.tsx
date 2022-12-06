import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { SubText, Text } from "../styles/SharedComponents";
import type { AddOns } from "../types";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem;
  border: 1px solid var(--lightGray);
  border-radius: 8px;
  /* cursor: pointer; */

  &:has(input[type="checkbox"]:checked) {
    border-color: var(--purplishBlue);
  }
`;

const CheckBox = styled.input`
  width: 1.25rem;
  transform: scale(1.25);
  accent-color: var(--purplishBlue);
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding-left: 0.75rem;
`;

const AddOnsText = styled(Text)`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.5;
`;

const Subtitle = styled(SubText)`
  font-size: 0.8rem;
`;

const Discount = styled(Text)`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--purplishBlue);
`;

interface AddOnsProps {
  subtitle: string;
  addOns: AddOns;
}

const AddOnsForm: React.FC<AddOnsProps> = ({ addOns, subtitle }) => {
  const { name, price } = addOns;
  const { register, getValues, setValue, control } = useFormContext();
  const { fields, replace } = useFieldArray({
    control,
    name: "addOns",
  });
  const isYearly = getValues("period") === "Yearly";
  const discount = isYearly ? `+$${price * 10}/yr` : `+$${price}/mo`;

  const clickHandler = () => {
    // replace([{ name, price }]);
    setValue("addOns", { name, price });
  };

  return (
    <Wrapper onClick={clickHandler}>
      <CheckBox type="checkbox" value={name} {...register("addOns")} />
      <TextWrapper>
        <AddOnsText>{name}</AddOnsText>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
      <Discount>{discount}</Discount>
    </Wrapper>
  );
};

export default AddOnsForm;
