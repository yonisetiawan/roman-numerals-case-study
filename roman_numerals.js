'use strict'

let assert = require('assert')

// release 0
function to_roman_old(n) {
  // write your code here to convert arabic numerals into roman numerals
  var arr = [];
  var arrRoman = ["M", "DCCCC", "D", "CD", "C", "LXXXX", "L", "XL", "X", "V", "I"];
  var arrArabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 5, 1];

  for (var i = 0; i < arrArabic.length; i++) {
    if (n >= arrArabic[i]) {
      arr.push(arrRoman[i])
      n = n - arrArabic[i]
      i = i - 1
    }
  }
  var hasil = arr.join("");
  return (hasil)
}

// "assert" that the result of converting 1 using to_roman_old(1) should equal "I"
assert.equal(to_roman_old(1), "I")

// alternatively, we can write the boolean expression ourselves like this:
// assert(to_roman_old(1) == "I")
// so what's the difference?  none, really.  just convenience and expressiveness

// here are a few more assertions (or "tests" as they're often called)

// assert.equal(to_roman_old(2), "II")    # commented out on purpose, see below
// assert.equal(to_roman_old(3), "III")   # commented out on purpose, see below
// assert.equal(to_roman_old(4), "IIII")  # commented out on purpose, see below
assert.equal(to_roman_old(5), "V")
assert.equal(to_roman_old(6), "VI")

// what other tests could you add to ensure your to_roman_old method is working?
assert.equal(to_roman_old(10), "X")
assert.equal(to_roman_old(44), "XLIIII")
assert.equal(to_roman_old(999), "DCCCCLXXXXVIIII")
  // keep in mind that while some of the tests above seem useful, testing for
  // 1, 2, 3 and 4 doesn't really help you exercise more of your code. all of them
  // are basically testing the same thing, right?  it's only when you test the
  // arabic number 5 or 6 do you get new information about whether or not your
  // solution works
  //
  // building your sense of judgement about what and when to test doesn't come easy
  // take time writing your tests, reading other people's tests and building an
  // informed opinion from there

//##############################################################################

// release 1 saya pilih solution 4 sebenarnya cmn males nulis ulangnya
function to_roman_new(num) {
  // write your code here to convert arabic numerals into roman numerals
  if (typeof num !== 'number') {
    return false;
  }
  var digits = String(+num).split("");

  var key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
  ];

  var roman_num = "";

  var i = 3;
  while (i--)

    roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;


  return Array(+digits.join("") + 1).join("M") + roman_num;
}

// you might be able to reuse some of your tests from above but take care not to
// set the wrong expectations for yourself.  you wouldn't want to solve the wrong
// problem, would you?
assert.equal(to_roman_new(5), "V")
assert.equal(to_roman_new(6), "VI")
assert.equal(to_roman_new(10), "X")
assert.equal(to_roman_new(44), "XLIV")
assert.equal(to_roman_new(999), "CMXCIX")
assert.equal(to_roman_new(2000), "MM")

//Release 2
// karena makin sedikit kode yang digunakan semakin mudah memaintencenya, jelas dan singkat.
//masalah yang dipecah kecil2 memperjelas code
