'use strict'

let assert = require('assert')

function to_roman_old(arabic_num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "MC", "D", "CD", "C", "XC", "L", "XL", "X", "VIIII", "V", "IIII", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (arabic_num % decimal[i] < arabic_num) {
            result += roman[i];
            arabic_num -= decimal[i];
        }
    }
    return result;
}

function to_roman_new(arabic_num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "MC", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (arabic_num % decimal[i] < arabic_num) {
            result += roman[i];
            arabic_num -= decimal[i];
        }
    }
    return result;
}



console.log(to_roman_old(9));
assert.equal(to_roman_old(1), "I")
assert.equal(to_roman_old(5), "V")
assert.equal(to_roman_old(6), "VI")

console.log(to_roman_new(9));
assert.equal(to_roman_new(1), "I")
assert.equal(to_roman_new(5), "V")
assert.equal(to_roman_new(6), "VI")
