// Formats the numbers so that they have commas and end in ".00"
export const formatNumbers = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
};
