// Resistor Networks
// By: @KeeganHughKelly, Monday 17th April 2023

function resist(net) {
  let result = 0;
  if (net[0] == "(") {
    let index = 1;
    let count = 1;
    while (count > 0) {
      if (net[index] == "(") {
        count += 1;
      } else if (net[index] == ")") {
        count -= 1;
      }
      index += 1;
    }
    let first = resist(net.substring(1, index - 1));
    let second = resist(net.substring(index, net.length));
    result = first + second;
  } else if (net[0] == "[") {
    let index = 1;
    let count = 1;
    while (count > 0) {
      if (net[index] == "[") {
        count += 1;
      } else if (net[index] == "]") {
        count -= 1;
      }
      index += 1;
    }
    let first = resist(net.substring(1, index - 1));
    let second = resist(net.substring(index, net.length));
    result = 1 / (1 / first + 1 / second);
  } else {
    let index = 1;
    while (net[index] != ",") {
      index += 1;
    }
    let first = parseFloat(net.substring(0, index));
    let second = resist(net.substring(index + 1, net.length));
    result = first + second;
  }
  return Math.round(result * 10) / 10;
}

// Tests
console.log(resist("(10, [20, 30])")); // 22.0
console.log(resist("[10, (20, 30)]")); // 8.3
console.log(resist("([10, 20], (30, 40))")); // 76.7
console.log(resist("(1, [12, 4, (1, [10, (2, 8)])])")); // 3.0
console.log(resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])")); // 10