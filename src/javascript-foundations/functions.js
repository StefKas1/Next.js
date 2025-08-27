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
