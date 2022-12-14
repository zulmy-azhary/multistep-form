import React, { useState } from "react";
import { Heading, Header, SubHeader, Text, SubText } from "../styles/SharedComponents";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import type { AddOns, Option } from "../types";
import { totalPeriod } from "../helper";

const Details = styled.div`
  background-color: var(--alabaster);
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 5px;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    margin-top: 2.5rem;
    padding: 1rem 1.5rem;
  }
`;

const Total = styled.div`
  margin-top: 1.25rem;
  padding: 0 1rem;
  @media (min-width: ${(props) => props.theme.media.laptop}) {
    padding: 0 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--lightGray);
  line-height: 1.5;
  padding-bottom: 0.5rem;
`;

const PlanContent = styled.div``;

const PlanText = styled(Text)`
  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1.05rem;
  }
`;

const Change = styled(SubText)`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--purplishBlue);
  }
`;

const Price = styled(Text)`
  font-size: 0.875rem;
  font-weight: 700;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1.05rem;
  }
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

const AddOnsText = styled(SubText)`
  font-size: 0.925rem;
  font-weight: 400;
`;

const AddOnsPrice = styled(Price)`
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 0.875rem;
  }
`;
const TotalText = styled(Price)`
  color: var(--purplishBlue);
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1.25rem;
  }
`;

const Summary: React.FC = () => {
  const { getValues } = useFormContext();
  const { period, option, addOns } = getValues();
  const { name, price }: Option = option;
  const [total] = useState<number>(() => {
    const sum = addOns.reduce((acc: number, { price }: { price: number }) => acc + price, 0);
    const total = sum + price;

    return total;
  });

  return (
    <>
      <Heading>
        <Header>Finishing up</Header>
        <SubHeader>Double-check everything looks OK before confirming.</SubHeader>
      </Heading>
      <Details>
        <Wrapper>
          <PlanContent>
            <PlanText>
              {name} ({period})
            </PlanText>
            <Change as="a">Change</Change>
          </PlanContent>
          <Price>{totalPeriod(period, price)}</Price>
        </Wrapper>
        <AddOnsInfo>
          {!!addOns.length ? (
            addOns.map((item: AddOns, idx: number) => {
              return (
                <Info key={idx}>
                  <AddOnsText>{item.title}</AddOnsText>
                  <AddOnsPrice>+{totalPeriod(period, item.price)}</AddOnsPrice>
                </Info>
              );
            })
          ) : (
            <Info>
              <AddOnsText>No add-ons added.</AddOnsText>
            </Info>
          )}
        </AddOnsInfo>
      </Details>
      <Total>
        <Info>
          <AddOnsText>Total (per {period === "Yearly" ? "year" : "month"})</AddOnsText>
          <TotalText>+{totalPeriod(period, total)}</TotalText>
        </Info>
      </Total>
    </>
  );
};

export default Summary;
