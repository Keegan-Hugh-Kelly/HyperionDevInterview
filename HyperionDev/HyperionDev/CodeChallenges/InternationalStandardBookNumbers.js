// International Standard Book Numbers (ISBN)
// By: @KeeganHughKelly , Monday 17th April 2023

// Notes:
// ISBN-13 is made up of 13 digits where the first 12 digits are either 0-9 or X and the last digit is a check digit calculated using a modulus 10 algorithm.
// ISBN-10 is made up of 10 digits where the last digit is a check digit calculated using a modulus 11 algorithm.
// The check digit for ISBN-10 is "X" if the result is 10.

function ISBN(num) {
  if (num.length == 13) { // ISBN-13
    let sum = 0;
    let check = 0;
    for (let i = 0; i < 12; i++) {
      if (i % 2 == 0) {
        sum += parseInt(num[i]) * 1;
      } else {
        sum += parseInt(num[i]) * 3;
      }
    }
    check = (10 - (sum % 10)) % 10; // Modulus 10
    if (check == num[12]) {
      return "Valid"; // Valid ISBN-13
    } else {
      return "Invalid"; // Invalid check digit
    }
  } else if (num.length == 10) { // ISBN-10
    let sum = 0;
    let check = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(num[i]) * (i + 1);
    }
    check = sum % 11; // Modulus 11
    if (check == 10) {
      check = "X";
    }
    if (check == num[9]) { // Check digit
      let newNum = "978" + num.substring(0, 9);
      let sum = 0;
      let check = 0;
      for (let i = 0; i < 12; i++) {
        if (i % 2 == 0) {
          sum += parseInt(newNum[i]) * 1;
        } else {
          sum += parseInt(newNum[i]) * 3;
        }
      }
      check = (10 - (sum % 10)) % 10; // Modulus 10
      if (check == num[12]) {
        return "Valid"; // Valid ISBN-10
      }
    } else {
      return "Invalid"; // Invalid check digit
    }
  } else {
    return "Invalid"; // Invalid length
  }
}

// Tests
console.log(ISBN("9780470059029")); // Valid
console.log(ISBN("9780471486480")); // Valid
console.log(ISBN("9780470059028")); // Invalid
console.log(ISBN("9780471486481")); // Invalid
console.log(ISBN("0-321@14653-0")); // Invalid
console.log(ISBN("877195x869")); // Invalid
console.log(ISBN("877195869")); // Invalid
console.log(ISBN("877195869xx")); // Invalid