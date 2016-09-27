// var roman = new Array();
// roman = ["M", "CC"];
// var decimal = new Array();
// decimal = [1000, 900]
//
// function to_roman(value) {
//   if (value <= 0 || value >= 4000) return value;
//   var romanNumeral = "";
//   for (var i = 0; i < roman.length; i += 1) {
//     while (value >= decimal[i]) {
//       value -= decimal[i];
//       romanNumeral += roman[i] + "-";
//     }
//   }
//   return romanNumeral;
// }
//
// console.log(to_roman(3900));

var to_roman = function(num) {
  var decimalValue = [1,4];
  var romanNumeral = ['I', 'IV'];

  var numCopy = num;
  var romanized = '';

  while (numCopy > 0) {
    for (var index = 0; index < decimalValue.length; index++) {
      if (+decimalValue[index] <= numCopy && +decimalValue[+index +1] > numCopy) {
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }
    }
  }
  return romanized;
};

console.log(to_roman(4));
