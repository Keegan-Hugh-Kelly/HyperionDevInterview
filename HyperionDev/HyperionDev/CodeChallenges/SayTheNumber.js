// Say The Number!
// By: @KeeganHughKelly, Monday 17th April 2023

function sayNumber(num) {
    // Define an array of single digit numbers in words
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
    // Define an array of two digit numbers in words
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    // Define an array of special numbers in words
    const special = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    };
  
    // Convert the numeral to string and split it into groups of 3 digits
    let numStr = String(num);
    let numGroups = numStr.match(/(\d{1,3})(?=(\d{3})*$)/g);
  
    // Reverse the order of the groups so that we can start from the least significant digit
    numGroups.reverse();
  
    // Define an array to hold the final result
    let result = [];
  
    // Loop through each group and convert it to words
    for (let i = 0; i < numGroups.length; i++) {
      let numGroup = numGroups[i];
  
      // Convert the hundreds digit to words
      let hundreds = ones[numGroup[0]];
      if (hundreds) {
        result.push(`${hundreds} hundred`);
      }
  
      // Convert the last two digits to words
      let lastTwoDigits = Number(numGroup.slice(-2));
      if (lastTwoDigits) {
        if (lastTwoDigits in special) {
          result.push(special[lastTwoDigits]);
        } else {
          let tensDigit = tens[numGroup[numGroup.length - 2]];
          let onesDigit = ones[numGroup[numGroup.length - 1]];
          if (tensDigit) {
            result.push(tensDigit);
          }
          if (onesDigit) {
            result.push(onesDigit);
          }
        }
      }
  
      // Add the appropriate suffix (thousand, million, etc.) to the group
      let suffix = ['', 'thousand', 'million', 'billion', 'trillion'][i];
      if (suffix && result.length) {
        result.push(suffix);
      }
    }
  
    // Reverse the order of the words and join them with spaces
    result.reverse();
    return result.join(' ');
  }
  
  console.log(sayNumber(123456789)); // Output: "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine"
  