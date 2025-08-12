/**
 *
 * Objective : Write a funtion to give me the sum of all numbers in an array
 * Step 1 : declare a funtion
 * Step 2 : call check whether the funtion is called properly
 * Step 3 : set a parameter(s)
 * Step 4 : pas the parameter(s), check whether parameter is passed in a proper 
            format 
 * Step 5 :  Do the funtion tasks (step by step)
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log("sum of numbers is", sum);
