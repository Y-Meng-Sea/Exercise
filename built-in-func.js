// absolute function
export function asb(number) {
  let result = number < 0 ? -number : number;
  return result;
}

// length method
export function length(items) {
  let count = 0;
  while (items[count] !== undefined) {
    count++;
  }
  return count;
}

// min method
export function min(...numbers) {
  if (numbers.length === 1 && typeof numbers[0] === "object" && length(numbers[0]) !== undefined) {
    let minimum = numbers[0][0];
    for (let i = 1; i < length(numbers[0]); i++) {
      if (minimum > numbers[0][i]) {
        minimum = numbers[0][i];
      }
    }
    return minimum;
  } else {
    let minimum = numbers[0];
    for (let i = 1; i < length(numbers); i++) {
      if (minimum > numbers[i]) {
        minimum = numbers[i];
      } else {
      }
    }
    return minimum;
  }
}

// find max
export function max(...numbers) {
  if (numbers.length === 1 && typeof numbers[0] === "object" && length(numbers[0]) !== undefined) {
    let miximum = numbers[0][0];
    for (let i = 1; i < length(numbers[0]); i++) {
      if (miximum < numbers[0][i]) {
        miximum = numbers[0][i];
      }
    }
    return miximum;
  } else {
    let miximum = numbers[0];
    for (let i = 1; i < length(numbers); i++) {
      if (miximum < numbers[i]) {
        miximum = numbers[i];
      } else {
      }
    }
    return miximum;
  }
}

// round method
export function round(number) {
  let integerPart = number | 0;
  let decimalPart = number - integerPart;

  if (decimalPart >= 0.5) {
    return integerPart + 1;
  } else if (decimalPart <= -0.5) {
    return integerPart - 1;
  } else {
    return integerPart;
  }
}
