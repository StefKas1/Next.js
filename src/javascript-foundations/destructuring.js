// Destructure array
const arr = [1, 2, 3];

let [a, b] = arr;
console.log(a, b);

[a, , c] = arr;
console.log(a, c);

[a, ...rest] = arr;
console.log(a, rest);

// Destructure object
const obj = { x: 1, y: 2, z: 3 };
let { x, y } = obj;
console.log(x, y);

let { x: x2, ...rest2 } = obj;
console.log(x2, rest2);
