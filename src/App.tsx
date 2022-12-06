import React from "react";
import styled, { useTheme } from "styled-components";
import { StepForm } from "./components";
import { useMediaQuery, useStepForm } from "./hooks";
import { AddOns, PersonalInfo, Plan, Summary } from "./pages";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "./types";

const Container = styled.form`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    background: url("/images/bg-sidebar-mobile.svg") no-repeat top center;
  }

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    background: none;
  }
`;

const Wrapper = styled.main`
  padding: 0 1rem;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    justify-content: center;
  }
`;

const Dots = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

const Item = styled.div<{ isActive: boolean }>`
  --size: 2.25rem;

  background: ${({ isActive }) => (isActive ? "var(--lightBlue)" : " transparent")};
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid white;
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  font-size: 0.875rem;
  font-weight: 500;
`;

const Card = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  display: flex;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    max-width: calc(var(--tablet) / 1.25);
    padding: 0.875rem;
    column-gap: 1rem;
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    max-width: calc(var(--laptop) / 1.25);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: calc(var(--desktop) / 1.5);
    column-gap: 1.5rem;
  }
`;
const Sidebar = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
`;

const CardContent = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    row-gap: 2rem;
    padding: 1rem 5rem;
  }
`;

const Content = styled.div`
  @media (min-width: ${(props) => props.theme.media.laptop}) {
    margin-top: 1.5rem;
  }
`;

const defaultValues: FormData = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  option: { name: "Arcade", price: 9 },
  period: "Monthly",
  addOns: [],
};

const App: React.FC = () => {
  const methods = useForm<FormData>({
    mode: "all",
    defaultValues: defaultValues,
  });
  const { media } = useTheme();
  const isTablet = useMediaQuery(`(min-width: ${media.tablet})`);
  const stepList: JSX.Element[] = [<PersonalInfo />, <Plan />, <AddOns />, <Summary />];
  const { steps, step, backStep, nextStep, isFirstStep, isLastStep } = useStepForm(stepList);

  const onSubmit = methods.handleSubmit((data: FormData) => {
    if (!isLastStep) return nextStep();
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <Container onSubmit={onSubmit}>
        <Wrapper>
          {!isTablet && (
            <Dots>
              {steps &&
                steps.map((_, idx: number) => {
                  const isActive = steps.indexOf(step) === idx;

                  return (
                    <Item key={idx} isActive={isActive}>
                      {idx + 1}
                    </Item>
                  );
                })}
            </Dots>
          )}
          <Card>
            {isTablet && (
              <Sidebar>
                <Image src={"/images/bg-sidebar-desktop.svg"} />
              </Sidebar>
            )}
            <CardContent>
              <Content>{step}</Content>
              {isTablet && <StepForm stepState={{ backStep, isFirstStep, isLastStep }} />}
            </CardContent>
          </Card>
        </Wrapper>
        {!isTablet && <StepForm stepState={{ backStep, isFirstStep, isLastStep }} />}
      </Container>
    </FormProvider>
  );
};

export default App;
