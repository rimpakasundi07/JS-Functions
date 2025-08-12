function eatRice() {
  console.log("Please wash your hand");
  console.log("Seat down");
  console.log("Take your food");
  console.log("Now,you can eat ");
}

// --------------------------------------
function square(number) {
  console.log(number);
  console.log("value of the number parameter", number);
  const borgo = number * number;
  console.log("square of the given number is: ", borgo);
  // অথবা template literal ব্যবহার করতে পারো ↓
  // console.log(`square of the given number is: ,{borgo}`);
}

square(4);

// console.log("----------");     **
// square(12);
// square(20);
// square(552);

// ------------------------------------------------------------>>>>>>>>>>
//   *************************
function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

// add(5, 71); **
// add(21, 18);

// -------------------------------------------------------'
// another method

function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(total);
}

addAll(3, 5, 9, 65, 26);
