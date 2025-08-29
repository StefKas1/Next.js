// Change object
car = { eninge: "gasoline", color: "blue" };

function addPart(car) {
  car.seats = 5;
}

addPart(car);
console.log(car);

// Change array
function changeArr(arr) {
  arr[0] = 10;
}

const arr = [1, 2, 3];
changeArr(arr);
console.log(arr);

// Define anonymous function
const f = function (x) {
  return x * x;
};

console.log(f(10));

// args
function sum_nums(num1, ...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  console.log(total);
}

sum_nums(1, 10, 20, 30);

// Arrow function
const square = (s) => s * s;
console.log(square(2));
