import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* Primary */
    --marineBlue: ${(props) => props.theme.colors.primary.marineBlue};
    --purplishBlue: ${(props) => props.theme.colors.primary.purplishBlue};
    --pastelBlue: ${(props) => props.theme.colors.primary.pastelBlue};
    --lightBlue: ${(props) => props.theme.colors.primary.lightBlue};
    --strawberryRed: ${(props) => props.theme.colors.primary.strawberryRed};

    /* Neutral */
    --coolGray: ${(props) => props.theme.colors.neutral.coolGray};
    --lightGray: ${(props) => props.theme.colors.neutral.lightGray};
    --magnolia: ${(props) => props.theme.colors.neutral.magnolia};
    --alabaster: ${(props) => props.theme.colors.neutral.alabaster};

    /* Breakpoints */
    --mobile: ${(props) => props.theme.media.mobile};
    --tablet: ${(props) => props.theme.media.tablet};
    --laptop: ${(props) => props.theme.media.laptop};
    --desktop: ${(props) => props.theme.media.desktop};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background: var(--magnolia);
  }

  button {
    font-family: "Ubuntu";
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;
