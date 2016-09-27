# roman-numerals-case-study

#Review Solusi 1
##Pros
+ Code cukup singkat dan sederhana
+ Logika kondisi untuk looping lebih simple, cukup bandingkan value dengan value pada arrayDecimal

##Cons
- Deklarasi Array masih menggunakan newArray()
- Penggunaan Variable global
- Hanya dapat mengolah data dengan range 1-3999

#Review Solusi 2
##Pros
+ Ada validasi di awal function untuk memastikan value merupakan angka atau data dengan type number;
+ Code singkat dengan hanya total 7 line untuk mengolah proses konversi dari arabic number ke roman number

##Cons
- Untuk menentukan nilai dari roman num menggunakan metode yang cukup rumit.


#Review Solusi 3
##Pros
+ Code cukup singkat dan sederhana
##Cons
- Kondisi yang diberikan pada if di dalam while membuat program tidak dapat mengolah data dengan range diatas 999 sehingga jika ingin mengolahnya harus ditambah value pada array decimal dan romanNumeral sampai batas yang diinginkan
- Penggunaan unitary plus di depan variable yang type nya sudah merupakan number
- Hanya dapat mengolah data dengan range 1-999

#Review Solusi 4
##Pros
+ Code cukup singkat dan sederhana
+ Penggunaan [] tanpa newArray() merupakan best practice
+ Penggunaan Variable local lebih baik dari global

##Cons
- Ada kesalahan array roman index 1, untuk decimal 900, seharusnya CM, di kode MC.sehingga akan menghasilkan output yang salah jika kode di eksekusi.
- Kondisi untuk while lebih sederhana
