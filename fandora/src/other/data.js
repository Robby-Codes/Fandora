// Information about each car, including whether or not they have
// been placed in the cart.
export const data = {
  1: [false, "AC SHELBY COBRA", 170000.0],
  2: [false, "AUDI R8", 169000.0],
  3: [false, "AUDI R8 SPYDER", 219445.0],
  4: [false, "BUGATTI CHIRON", 3000000.0],
  5: [false, "CHEVROLET CAMARO SS", 25000.0],
  6: [false, "DELOREAN", 999999999.0],
  7: [false, "FORD THUNDERBIRD 1961", 27000.0],
  8: [false, "MCLAREN F1 1994", 14500000.0],
  9: [false, "PEOGEOT ONYX", 2500000.0],
};

// finds the total price of all the cars placed inside the cart
export const totalAmount = (data) => {
  let total = 0;
  for (const [key, value] of Object.entries(data)) {
    if (value[0] === true) {
      total += value[2];
    }
  }
  return total;
};
