import React from "react";
import { Heading, Header, SubHeader, Text, SubText } from "../styles/SharedComponents";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import type { AddOns, Option } from "../types";
import { totalPeriod } from "../helper";

const Details = styled.div`
  background-color: var(--alabaster);
  padding: 1rem;
  margin-top: 1.5rem;
`;

const Total = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--lightGray);
  line-height: 1.5;
  padding-bottom: 0.5rem;
`;

const PlanContent = styled.div``;

const PlanText = styled(Text)``;

const Change = styled(SubText)``;

const Price = styled(Text)`
  font-size: 0.875rem;
  font-weight: 700;
`;

const AddOnsInfo = styled.div`
  margin-top: 1rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const AddOnsText = styled(SubText)``;

const AddOnsPrice = styled(Price)`
  font-weight: 500;
`;

const Summary: React.FC = () => {
  const { getValues } = useFormContext();
  const { period, option, addOns } = getValues();
  const { name, price }: Option = option;

  return (
    <>
      <Heading>
        <Header>Finishing up</Header>
        <SubHeader>Double-check everything looks OK before confirming.</SubHeader>
      </Heading>
      <Details>
        <Wrapper>
          <PlanContent>
            <PlanText>{name}</PlanText>
            <Change>Change</Change>
          </PlanContent>
          <Price>{totalPeriod(period, price)}</Price>
        </Wrapper>
        <AddOnsInfo>
          {!!addOns.length ? (
            addOns.map((item: AddOns, idx: number) => (
              <Info key={idx}>
                <AddOnsText>{item.title}</AddOnsText>
                <AddOnsPrice>+{totalPeriod(period, item.price)}</AddOnsPrice>
              </Info>
            ))
          ) : (
            <Info>
              <AddOnsText>No add-ons added.</AddOnsText>
            </Info>
          )}
        </AddOnsInfo>
      </Details>
      <Total></Total>
    </>
  );
};

export default Summary;
