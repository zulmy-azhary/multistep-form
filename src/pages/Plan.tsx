import React from "react";
import styled from "styled-components";
import { Header, Heading, SubHeader } from "../styles/SharedComponents";

const Plan: React.FC = () => {
  return (
    <>
      <Heading>
        <Header>Select your plan</Header>
        <SubHeader>You have the option of monthly or yearly billing.</SubHeader>
      </Heading>
    </>
  );
};

export default Plan;
