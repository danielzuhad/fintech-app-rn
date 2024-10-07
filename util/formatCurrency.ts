export const formatCurrency = (num: number) => {
  return num.toLocaleString("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0,
  });
};
