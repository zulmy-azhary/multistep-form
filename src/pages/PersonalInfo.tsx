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
        <InputForm title="Name" type="text" name="name" placeholder="e.g. Stephen King" />
        <InputForm
          title="Email Address"
          type="email"
          name="emailAddress"
          placeholder="e.g. stephenking@lorem.com"
        />
        <InputForm
          title="Phone Number"
          type="tel"
          name="phoneNumber"
          placeholder="e.g. +1 234 567 890"
        />
      </Form>
    </>
  );
};

export default PersonalInfo;
