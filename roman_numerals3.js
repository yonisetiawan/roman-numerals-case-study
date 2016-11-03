'use strict'

let assert = require('assert')

function to_roman_old(arabic_num) {
    // Create arrays with default conversion with matching indices.
    var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanNumeral = ['I', 'IIII', 'V', 'VIIII', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // Create a copy of arabic_num to work on and an empty string variable for the final roman number
    var numCopy = arabic_num;
    var romanized = '';

    // While the decimal number is greater than 0,
    while (numCopy > 0) {
        // Loop through the indices of the decimalValue array.
        for (var index = 0; index < decimalValue.length; index++) {
            // Get the maximum decimal number less or equal then the decimal number.
            if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
                // Add the Roman numeral & decrease numCopy by the decimal equivalent.
                romanized += romanNumeral[index];
                numCopy -= decimalValue[index];
            }
        }
    }

    return romanized;
}

function to_roman_new(arabic_num) {
    // Create arrays with default conversion with matching indices.
    var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // Create a copy of arabic_num to work on and an empty string variable for the final roman number
    var numCopy = arabic_num;
    var romanized = '';

    // While the decimal number is greater than 0,
    while (numCopy > 0) {
        // Loop through the indices of the decimalValue array.
        for (var index = 0; index < decimalValue.length; index++) {
            // Get the maximum decimal number less or equal then the decimal number.
            if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
                // Add the Roman numeral & decrease numCopy by the decimal equivalent.
                romanized += romanNumeral[index];
                numCopy -= decimalValue[index];
            }
        }
    }

    return romanized;
}



console.log(to_roman_old(9));
assert.equal(to_roman_old(1), "I")
assert.equal(to_roman_old(5), "V")
assert.equal(to_roman_old(6), "VI")

console.log(to_roman_new(9));
assert.equal(to_roman_new(1), "I")
assert.equal(to_roman_new(5), "V")
assert.equal(to_roman_new(6), "VI")
