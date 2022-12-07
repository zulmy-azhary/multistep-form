import React from "react";
import styled from "styled-components";
import { Header, SubHeader } from "../styles/SharedComponents";

const Container = styled.div`
  padding: 3rem 0;
  text-align: center;
  height: 100%;
`;

const Image = styled.img`
  width: 3.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: initial;
  }
`;

const Description = styled(SubHeader)`
  @media (min-width: ${(props) => props.theme.media.tablet}) {
    margin-top: 1rem;
  }
`;

const ThankYou: React.FC = () => {
  return (
    <Container>
      <Image src="/images/icon-thank-you.svg" alt="Thanks Icon" />
      <Header>Thank you!</Header>
      <Description>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </Description>
    </Container>
  );
};

export default ThankYou;
