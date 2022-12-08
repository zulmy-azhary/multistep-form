import React from "react";
import { InputForm } from "../components";
import { Heading, Header, SubHeader } from "../styles/SharedComponents";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

const Form = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    margin-top: 2.5rem;
  }
`;

const PersonalInfo: React.FC = () => {
  const { register } = useFormContext();
  return (
    <>
      <Heading>
        <Header>Personal info</Header>
        <SubHeader>Please provide your name, email address, and phone number.</SubHeader>
      </Heading>
      <Form>
        {personalData.map(({ validation, ...data }: PersonalData) => (
          <InputForm key={data.inputName} {...register(data.inputName, validation)} {...data} />
        ))}
      </Form>
    </>
  );
};

type PersonalData = {
  title: string;
  type: string;
  placeholder: string;
  inputName: string;
  validation: {
    required: string;
    minLength?:
      | {
          value: number;
          message: string;
        }
      | number;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
};

const personalData: PersonalData[] = [
  {
    title: "Name",
    type: "text",
    placeholder: "e.g. Stephen King",
    inputName: "name",
    validation: {
      required: "Name is required.",
      minLength: {
        value: 6,
        message: "Name must be at least 6 characters.",
      },
    },
  },
  {
    title: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
    inputName: "emailAddress",
    validation: {
      required: "Email Address is required.",
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: "Enter a valid e-mail address",
      },
    },
  },
  {
    title: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1 234 567 890",
    inputName: "phoneNumber",
    validation: {
      required: "Phone Number is required.",
      pattern: {
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        message: "Invalid phone number format.",
      },
    },
  },
];

export default PersonalInfo;
