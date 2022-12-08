import React from "react";
import { Heading, Header, SubHeader } from "../styles/SharedComponents";
import styled from "styled-components";
import { AddOnsForm } from "../components";
import type { AddOns as AddOnsType } from "../types";

const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.875rem;
  margin-top: 1.5rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    margin-top: 2.5rem;
  }
`;

const AddOns: React.FC = () => {
  return (
    <>
      <Heading>
        <Header>Pick add-ons</Header>
        <SubHeader>Add-ons help enhance your gaming experience.</SubHeader>
      </Heading>
      <AddOnsWrapper>
        {addOns.map((item) => (
          <AddOnsForm key={item.title} addOnsItem={item} />
        ))}
      </AddOnsWrapper>
    </>
  );
};

const addOns: (AddOnsType & { subtitle: string })[] = [
  {
    id: 1,
    title: "Online service",
    price: 1,
    subtitle: "Access to multiplayer games",
  },
  {
    id: 2,
    title: "Larger storage",
    price: 2,
    subtitle: "Extra 2TB of cloud save",
  },
  {
    id: 3,
    title: "Customizable profile",
    price: 2,
    subtitle: "Custom theme on your profile",
  },
];

export default AddOns;
