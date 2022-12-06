import React from "react";
import { Heading, Header, SubHeader } from "../styles/SharedComponents";
import styled from "styled-components";
import { AddOnsForm } from "../components";

const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.875rem;
`;

const AddOns: React.FC = () => {
  return (
    <>
      <Heading>
        <Header>Pick add-ons</Header>
        <SubHeader>Add-ons help enhance your gaming experience.</SubHeader>
      </Heading>
      <AddOnsWrapper>
        <AddOnsForm
          addOns={{ name: "Online service", price: 1 }}
          subtitle="Access to multiplayer games"
        />
        <AddOnsForm
          addOns={{ name: "Larger storage", price: 2 }}
          subtitle="Extra 1TB of cloud save"
        />
        <AddOnsForm
          addOns={{ name: "Customizable profile", price: 2 }}
          subtitle="Custom theme on your profile"
        />
      </AddOnsWrapper>
    </>
  );
};

export default AddOns;
