import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { totalPeriod } from "../helper";
import { SubText, Text } from "../styles/SharedComponents";
import type { AddOns } from "../types";

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem;
  border: 1px solid var(--lightGray);
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;

  &:has(input[type="checkbox"]:checked) {
    border-color: var(--purplishBlue);
  }
  &:hover {
    outline: 1px solid var(--purplishBlue);
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
  addOnsItem: AddOns & { subtitle: string };
}

const AddOnsForm: React.FC<AddOnsProps> = ({ addOnsItem }) => {
  const { id, title, subtitle, price } = addOnsItem;
  const { getValues, setValue, watch } = useFormContext();
  const { addOns, period } = getValues();
  const [isChecked, setChecked] = useState<boolean>(
    !!addOns.filter((i: AddOns) => i.title === title).length
  );

  const changeHandler = () => {
    watch("addOns");
    const addOnsData: AddOns[] = !isChecked
      ? addOns.includes(title)
        ? addOns
        : [...addOns, { id, title, price }]
      : addOns.filter((item: AddOns) => item.title !== title);

    const sortArray = addOnsData.sort((a, b) => a.id - b.id);
    setValue("addOns", sortArray);
    setChecked((prev) => !prev);
  };

  return (
    <Wrapper type="button">
      <CheckBox
        onChange={changeHandler}
        name={title}
        type="checkbox"
        value={title}
        checked={isChecked}
      />
      <TextWrapper>
        <AddOnsText>{title}</AddOnsText>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
      <Discount>+{totalPeriod(period, price)}</Discount>
    </Wrapper>
  );
};

export default AddOnsForm;
