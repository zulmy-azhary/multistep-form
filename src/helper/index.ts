export const totalPeriod = (field: string, price: number): string => {
  const yearly = field === "Yearly";
  const total = yearly ? `$${price * 10}/yr` : `$${price}/mo`;

  return total;
};