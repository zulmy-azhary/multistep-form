export type PersonalInfo = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
};

export type Option = "Arcade" | "Advanced" | "Pro";
export type Period = "Monthly" | "Yearly";

export type Plan = {
  option: Option;
  period: Period;
};

export type AddOns = {
  addOns: ("Service" | "Storage" | "Customizable")[];
};

export type FormData = PersonalInfo & Plan & AddOns;
