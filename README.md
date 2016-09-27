# roman-numerals-case-study

#solution 1 :
=> deklarasi array tidak perlu menyertakan "new Array", bisa disederhanakan dengan langsung var array = isi array.
=> solution 1 sudah betul dan berjalan sesuai harapan untuk range nilai 1-3999, diluar nilai tersebut function hanya akan return parameter.
=> pertama, function akan cek nilai parameter
jika nilai parameter diluar 1-3999, function akan langsung return parameter.
jika nilai parameter antara 1-3999, function akan menyediakan variable baru yang berfungsi sebagai hasil yaitu romanNumeral = ""
selanjutnya function akan track isi dari array roman, sambil proses track berjalan, kita set kondisi ketika value >= decimal[i], maka nilai value akan dikurangi decimal ke i dan variable romanNumeral akan diisi oleh roman ke i.
untuk kondisi diluar itu, proses akan berjlan tanpa melakukan apapun.
Terakhir tinggal return nilai dari roman numeral.
 => kita bisa menambahkan fungsi sampai 5000 dengan catatan kita menambah isi dari aaray roman sesuai dengan symbol yang diperlukan
 => function ini akan menghasilkan to roman modern, bukan to roman old
 => cara untuk mengganti menjadi roman old hanya tinggal replace IV menjadi IIII dst.

#solution 2 :
=> function ini akan cek parameter, jika parameter bukan bertipe number, akan direturn dengan false.
=> deklarasi variabel kurang semantic, meskipun bisa dijalankan namun lebih baik variable ditulis secara rapih dan semantic sehingga memudahkan orang lain untuk membaca code kita.
=> parameter yang dimasukkan akan dirubah menjadi string dan kemudian di split
=> parameter key di set untuk roman moderen, namun jika ingin merubah menjadi roman old cukup mengganti isi key dari IV jadi IIII dan IX jadi VIIII
=> function ini menggunakan array key yang merupakan sebuah array panjang. Dari array key ini kemudian akan dibuat sebuah fungsi yang mengeluarkan index tertentu dari array key. Setelah itu hasil akan dikumpulkan lagi pada array baru dan di join sehingga menghasilkan hasil yang diharapkan.

#solution 3 :
=> function 3 menggunakan comment yang memudahkan orang membaca code, yang mana hal ini sangat bagus untuk dilakukan dan dibiasakan.
=> function ini secara default tidak bisa dijalankan jika parameter diatas angka 999.
=> function akan berjalan dengan looping decimalValue secara terus menerus selama kondisi numcopy > 0. saat pengecekan decimalValue berlangsung, kita set kondisi untuk mengeluarkan value dari romanNumeral sesuai dengan index dari kondisi yang terpenuhi. Selanjutnya jika kondisi terpenuhi, isi romanized dengan nilai dan kurangi angka numCopy sesuai index dari decimalValue.

#solution 4 :
=> function 4 merupakan function yang penulisannya paling pendek dan bisa mendapatkan hasil sesuai yang diharapkan. untuk memperpanjang range cukup hanya dengan menambahkan array decimal dan array roman.
=> function ini bekerja dengan mengecek isi dari array decimal. ketika kondisi num%decimal[i] < num, result akan diisi oleh roman index ke i dan nilai num akan dikurangi oleh decimal indeks ke i.
=> meskipun tidak ditulis comment, namun solution 4 ini menjadi solution yang paling mudah untuk dipahami karena menggunakan logika sederhana. 
