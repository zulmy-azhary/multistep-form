import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    row-gap: 0.5rem;
  }
`;

const Label = styled.label`
  color: var(--marineBlue);
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--lightGray);
  border-radius: 5px;
  outline: none;

  &:active,
  &:focus {
    outline: 1px solid var(--purplishBlue);
  }
`;

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const InputForm: React.FC<InputFormProps> = (props) => {
  const { title, ...rest } = props;

  return (
    <Wrapper>
      <Label htmlFor={title}>{title}</Label>
      <Input id={title} {...rest} autoComplete="off" />
    </Wrapper>
  );
};

export default InputForm;
