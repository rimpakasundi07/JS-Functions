/**
 * create function that will  return only the even numbers
 *
 * return the sum of even numbers
 */

function evenNumbersonly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [5, 8, 9, 91, 24, 6];

const evens = evenNumbersonly(numbers);
console.log("even numbers are", evens);
