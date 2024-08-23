export const addPrices = (price1: string, price2: string): string => {
  const num1 = parseFloat(price1.replace('$', ''));
  const num2 = parseFloat(price2.replace('$', ''));

  const sum = num1 + num2;

  return `$${sum.toFixed(2)}`;
};

export const subtractPrices = (price1: string, price2: string): string => {
  const num1 = parseFloat(price1.replace('$', ''));
  const num2 = parseFloat(price2.replace('$', ''));

  const difference = num1 - num2;

  return `$${difference.toFixed(2)}`;
};

export const multiplyPrice = (price: string, quantity: number): string => {
  return (parseFloat(price.replace('$', '')) * quantity).toFixed(2);
};
