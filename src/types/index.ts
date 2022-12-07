export type PersonalInfo = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
};

export type OptionName = "Arcade" | "Advanced" | "Pro";
export type Option = {
  name: OptionName;
  price: number;
};
export type Period = "Monthly" | "Yearly";

export type Plan = {
  option: Option;
  period: Period;
};

export type AddOnsName = "Online service" | "Larger storage" | "Customizable profile";

export type AddOns = {
  id: number;
  title: AddOnsName;
  price: number;
};

export type FormData = PersonalInfo &
  Plan & {
    addOns: AddOns[];
  };
