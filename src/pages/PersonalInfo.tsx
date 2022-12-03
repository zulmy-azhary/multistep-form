import React from "react";
import { InputForm } from "../components";
import { Heading, Header, SubHeader } from "../styles/SharedComponents";
import styled from "styled-components";

const Form = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const PersonalInfo: React.FC = () => {
  return (
    <>
      <Heading>
        <Header>Personal info</Header>
        <SubHeader>Please provide your name, email address, and phone number.</SubHeader>
      </Heading>
      <Form>
        <InputForm required title="Name" type="text" />
        <InputForm required title="Email Address" type="email" />
        <InputForm required title="Phone Number" type="tel" />
      </Form>
    </>
  );
};

export default PersonalInfo;
