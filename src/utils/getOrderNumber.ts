export const getOrderNumber = (name: string) =>
  name.substring(0, 2).toUpperCase() +
  Math.floor(1000000 + Math.random() * 9000000).toString();
