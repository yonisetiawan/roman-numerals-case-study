'use strict'

let assert = require('assert')

// release 0
function to_roman_old(arabic_num) {
  // write your code here to convert arabic numerals into roman numerals
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
//
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

// release 1
function to_roman_new(arabic_num) {
  // write your code here to convert arabic numerals into roman numerals
}

// you might be able to reuse some of your tests from above but take care not to
// set the wrong expectations for yourself.  you wouldn't want to solve the wrong
// problem, would you?
