'use strict'

let assert = require('assert')

function to_roman_old(arabic_num) {
    if (typeof arabic_num !== 'number')
        return false;

    var digits = String(+arabic_num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IIII","V", "VI", "VII", "VIII", "VIIII"
        ],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}

function to_roman_new(arabic_num) {
    if (typeof arabic_num !== 'number')
        return false;

    var digits = String(+arabic_num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}



console.log(to_roman_old(9));
assert.equal(to_roman_old(1), "I")
assert.equal(to_roman_old(5), "V")
assert.equal(to_roman_old(6), "VI")

console.log(to_roman_new(9));
assert.equal(to_roman_new(1), "I")
assert.equal(to_roman_new(5), "V")
assert.equal(to_roman_new(6), "VI")
