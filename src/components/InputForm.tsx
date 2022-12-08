import React, { forwardRef, useEffect } from "react";
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
  color: var(--strawberryRed);
  font-size: 0.75rem;
  font-weight: 500;
`;

const Input = styled.input<{ isValid?: boolean }>`
  padding: 0.75rem;
  border: 1px solid var(--${(props) => (props.isValid ? "lightGray" : "strawberryRed")});
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

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
    line-height: 2rem;
  }
`;

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputName: string;
}

const InputForm: React.ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = (
  props,
  forwardedRef
) => {
  const { title, inputName, ...rest } = props;
  const { setValue, formState } = useFormContext();
  const { errors } = formState;
  const errorMsg = errors[inputName]?.message;

  return (
    <Wrapper>
      <Upper>
        <Label htmlFor={inputName}>{title}</Label>
        {!!errorMsg && <Error>{`${errorMsg}`}</Error>}
      </Upper>
      <Input
        {...rest}
        ref={forwardedRef}
        id={inputName}
        autoComplete="off"
        onChange={(e) => setValue(inputName, e.target.value)}
        isValid={!errorMsg}
      />
    </Wrapper>
  );
};

export default forwardRef(InputForm);
