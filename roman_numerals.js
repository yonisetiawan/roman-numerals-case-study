'use strict'

//    SOLUTION 01
var roman = new Array()
roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
var decimal = new Array()
decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

function to_roman01(value){
    // inputan harus 1 sampai 3999
    // bila dimasukan angka lebih atau di kurang dari inputan tersebut
    // maka akan mengembalikan nilai tersebut
    //kenapa dibuat demikian ? karena max value dari roman itu adalah sampai 3999
   if(value <= 0 || value >= 4000) return value;
   // variable romanNumeral menamung string
    var romanNumeral ="";
    for(var i = 0; i<roman.length; i++ ){
      while(value >= decimal[i]){
        value -= decimal[i];
        romanNumeral += roman[i];
      }
    }
  return romanNumeral
}


// console.log("lol");
// console.log("input|expected|actual");
// console.log("======================");
// console.log("4|IV|", to_roman01(4));
// console.log("9|IV|", to_roman01(9));
// console.log("13|IV|", to_roman01(13));
// console.log("1453|IV|", to_roman01(6000));

/*  KESIMPULAN : Solusi di atas sudah menghasilkan ouput yang sesuai
    soulsi di atas juga mengunakan standard rule roman numerals
    dan efektif
*/

//   SOLUTION 02
function to_roman02(num) {
  if(typeof num !== 'number')
  return false

  var digits = String(num).split(""),
  key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
        '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
        '','I','II','III','IV','V','VI','VII','VIII','IX'],
  roman_num = "";
  var i=3;
        while(i--){
          console.log(i);
        roman_num = (key[+digits.pop() + (i*10)] || "")+ roman_num
      }
        return Array(+digits.join('')+1).join('M')+roman_num
}

// console.log(to_roman02(1000));
// console.log(to_roman02(9));
// console.log(to_roman02(13));
// console.log(to_roman02(1453));
// console.log(to_roman02(1646));
// console.log(to_roman02(4646));

/*  KESIMPULAN : Solusi di atas sudah menghasilkan ouput yang sesuai dan ada validasi
    untuk mengatasi inputan selain angka, bila inputan bukan number maka fungsi ini akan mereturn false
    namun tidak mengikuti standard rule angka romawi karena ketika di masukan inputan
    dengan jumlah yang sangat besar outputnya tidak sesuai dengan aturan angka
    romawi
*/

//    SOLUTION 03
var to_roman3 = function(num){
  var decimalValue = [1,      4,   5,    9,  10,   40,  50,   90, 100,  400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var numCopy = num;
  var romanized = '';

  while(numCopy > 0){

    for(var index = 0; index < decimalValue.length; index++){

      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }

    }

  } // end of while
  return romanized;
};

// console.log("lol");
// console.log("input|expected|actual");
// console.log("======================");
// console.log("4    |IV     |", to_roman3(4));
// console.log("9    |IX     |", to_roman3(9));
// console.log("13   |XIII   |", to_roman3(13));
// console.log("100   |XIII   |", to_roman3(100));
// console.log("345   |XIII   |", to_roman3(345));
// console.log("1000s   |XIII   |", to_roman3(999));



/*  KESIMPULAN : Solusi 03 di kurang tepat, karena inputanya hanya terbatas oleh variable
    array decimalValue ketika angka yang di inputkan lebih besar dan lebih kecil dari value
    terakhir dari decimalValue maka error (infinit loop), misalkan : value terakhir dari decimalValue 1000
    maka inputan maksimalnya adalah 999
*/

//   SOLUTION 04
function to_roman4(num){
  var result = '';
  var roman = ['M','MC','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

  for(var i = 0; i <= decimal.length; i++){
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i]
    }
  }
  return result;
}

console.log("lol");
console.log("input|expected|actual");
console.log("======================");
console.log("4    |IV     |", to_roman4(4));
console.log("9    |IX     |", to_roman4(9));
console.log("13   |XIII   |", to_roman4(13));
console.log("100   |C   |", to_roman4(100));
console.log("345   |CCCXLV   |", to_roman4(345));
console.log("1000   |XIII   |", to_roman4(1000));
console.log("4578   |XIII   |", to_roman4(4578));

/*  KESIMPULAN :
    outputnya sudah benar dan cukup efektif
*/


/*
RELEASE 0
- semua solusi bisa dieksekusi, dengan melakukan pengujian masing-masing fungsi
- solusi 3 - infinite loop kalo nilai dimasukan lebih dari yang ditentukan
RELEASE 1
- solusi yang terbaik menurut kami adalah solusi pertama karena sesuai standard rules
RELEASE 2
- pola/pattern pada setiap aplikasi membuat code kita semakin efektif dan optimal
RELEASE 3
- menentukan pola setiap fungsi dan membuat pola yang seefektif dan seoptimal mungkin
*/
