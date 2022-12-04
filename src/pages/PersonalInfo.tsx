import React from "react";
import { InputForm } from "../components";
import { Heading, Header, SubHeader } from "../styles/SharedComponents";
import styled from "styled-components";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form/dist/types";
import { useFormCtx } from "../context";

const Form = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const PersonalInfo: React.FC = () => {
  const { register, setValue } = useFormCtx();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ev = e.target;
    setValue(ev.name, ev.value);
  };

  return (
    <>
      <Heading>
        <Header>Personal info</Header>
        <SubHeader>Please provide your name, email address, and phone number.</SubHeader>
      </Heading>
      <Form>
        <InputForm
          {...register("name", { required: "Name is required." })}
          title="Name"
          type="text"
          onChange={inputHandler}
          name="name"
        />
        <InputForm
          {...register("emailAddress", { required: "Email Address is required." })}
          title="Email Address"
          type="email"
          onChange={inputHandler}
          name="emailAddress"
        />
        <InputForm
          {...register("phoneNumber", { required: "Phone Number is required." })}
          title="Phone Number"
          type="tel"
          onChange={inputHandler}
          name="phoneNumber"
        />
      </Form>
    </>
  );
};

export default PersonalInfo;
