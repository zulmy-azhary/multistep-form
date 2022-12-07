import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    row-gap: 0.5rem;
  }
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  color: var(--marineBlue);
  font-size: 0.875rem;
  font-weight: 500;
`;

const Error = styled.span`
  color: red;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Input = styled.input<{ isValid?: boolean }>`
  padding: 0.75rem;
  border: 1px solid var(--lightGray);
  border-radius: 5px;
  outline: none;
  color: var(--marineBlue);
  font-weight: 700;

  &:active,
  &:focus {
    outline: 1px solid var(--purplishBlue);
  }

  &::placeholder {
    color: var(--coolGray);
  }

  @media (min-width: ${props => props.theme.media.laptop}) {
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
  }
`;

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
}

const InputForm: React.FC<InputFormProps> = (props) => {
  const { title, name, ...rest } = props;
  const { setValue, formState, register } = useFormContext();
  const { errors, isValid } = formState;

  return (
    <Wrapper>
      <Upper>
        <Label htmlFor={title}>{title}</Label>
        {/* <Error>Required.</Error> */}
      </Upper>
      <Input
        id={title}
        autoComplete="off"
        {...register(name, { required: `${title} is required.` })}
        {...rest}
        onChange={(e) => setValue(name, e.target.value)}
        isValid={isValid}
      />
    </Wrapper>
  );
};

export default InputForm;
