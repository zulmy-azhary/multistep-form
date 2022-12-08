import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { StepForm } from "./components";
import { useMediaQuery, useStepForm } from "./hooks";
import { AddOns, PersonalInfo, Plan, Summary, ThankYou } from "./pages";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "./types";
import { SubText } from "./styles/SharedComponents";

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

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    flex-direction: column;
    row-gap: 2rem;
    margin-top: 0;
    align-items: flex-start;
  }
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

const SidebarContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.5rem 2rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 1.25rem;
`;

const ItemTextContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const ItemSubText = styled(SubText)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.8rem;
`;

const ItemTitle = styled.h4`
  color: var(--alabaster);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 1px;
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
  const [stepList] = useState<JSX.Element[]>([
    <PersonalInfo />,
    <Plan />,
    <AddOns />,
    <Summary />,
    <ThankYou />,
  ]);
  const { steps, currentStep, step, backStep, nextStep, goToStep, isFirstStep, isLastStep } =
    useStepForm(stepList);

  const onSubmit = methods.handleSubmit((data: FormData) => {
    if (!isLastStep) return nextStep();
    goToStep(4);
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <Container onSubmit={onSubmit}>
        <Wrapper>
          {!isTablet && (
            <Dots>
              {stepsData.map((_, idx: number) => {
                const curr = currentStep !== 4 ? steps.indexOf(step) : 4;
                const i = currentStep !== 4 ? idx : idx + 1;
                const isActive = curr === i;

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
                <SidebarContent>
                  <Dots>
                    {stepsData.map((title, idx: number) => {
                      const curr = currentStep !== 4 ? steps.indexOf(step) : 4;
                      const i = currentStep !== 4 ? idx : idx + 1;
                      const isActive = curr === i;

                      return (
                        <ItemWrapper key={idx}>
                          <Item isActive={isActive}>{idx + 1}</Item>
                          <ItemTextContent>
                            <ItemSubText>Step {idx + 1}</ItemSubText>
                            <ItemTitle>{title}</ItemTitle>
                          </ItemTextContent>
                        </ItemWrapper>
                      );
                    })}
                  </Dots>
                </SidebarContent>
              </Sidebar>
            )}
            <CardContent>
              <Content>{step}</Content>
              {isTablet && (
                <StepForm stepState={{ currentStep, backStep, isFirstStep, isLastStep }} />
              )}
            </CardContent>
          </Card>
        </Wrapper>
        {!isTablet && <StepForm stepState={{ currentStep, backStep, isFirstStep, isLastStep }} />}
      </Container>
    </FormProvider>
  );
};

const stepsData: string[] = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

export default App;
