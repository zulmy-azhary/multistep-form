import styled from "styled-components";

export const Heading = styled.div``;

export const Header = styled.h1`
  color: var(--marineBlue);
  font-size: 1.5rem;
  line-height: 2.75rem;

  @media (min-width: ${props => props.theme.media.tablet}) {
    font-size: revert;
  }
`;

export const SubHeader = styled.h3`
  color: var(--coolGray);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Text = styled.p``