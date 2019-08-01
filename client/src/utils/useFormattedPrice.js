const useFormattedPrice = (
  { amount, currency, decimal_places },
  locale = "es-AR"
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: decimal_places
  });
  return formatter.format(amount);
};

export default useFormattedPrice;
