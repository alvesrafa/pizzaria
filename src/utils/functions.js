export const singularOrPlural = (number, singular, plural) => {
  if (number === 1) return singular;

  return plural;
};

export const numberToMoney = (number) =>
  new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
