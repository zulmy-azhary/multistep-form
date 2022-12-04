import React, { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form/dist/types";

// type FormData = {
//   name: string;
//   emailAddress: string;
//   phoneNumber: string;
// }

interface FormCtx {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}

const FormContext = createContext<FormCtx>({} as FormCtx);

export const useFormCtx = (): FormCtx => useContext(FormContext);

const FormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { register, setValue, handleSubmit, formState } = useForm<FieldValues>();

  return (
    <FormContext.Provider value={{ register, setValue, handleSubmit, formState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
