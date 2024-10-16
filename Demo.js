//import module
import { asb, length, min, max, round } from "./built-in-func.js";

// valuse for testing
const arr = ["Shoko", "hari", 2, { favCar: "supra" }]; // 4 itmes
const arr1 = [8, 2, 3, 9, 1, 0.5, 7, 0.2, 10];

// call method
console.log(asb(-20));
console.log(length(arr));
console.log(round(-2.3));
console.log(min(arr1));
console.log(max(arr1));
