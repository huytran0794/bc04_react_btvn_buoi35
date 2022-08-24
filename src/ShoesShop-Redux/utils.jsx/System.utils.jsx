const convertNumberLocaleUS = (number) => {
  return parseFloat(number).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export { convertNumberLocaleUS };
