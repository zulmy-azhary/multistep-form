import "styled-components";

type Primary = {
  marineBlue: string;
  purplishBlue: string;
  pastelBlue: string;
  lightBlue: string;
  strawberryRed: string;
};
type Neutron = {
  coolGray: string;
  lightGray: string;
  magnolia: string;
  alabaster: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: Primary;
      neutral: Neutral;
    };
    media: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
