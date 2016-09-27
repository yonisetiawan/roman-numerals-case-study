# roman-numerals-case-study


##Roman Numerals 1
1. Solusi dapat dieksekusi dengan baik akan tetapi terdapat beberapa hal yang tidak diperlukan. Seperti, deklarasi array pada variabel roman dan decimal. Karena deklarasi variabel dengan ```[]``` sendiri dan samanya data type pada isinya sudah cukup membuat pembaca kode tau bahwa data type pada tabel tersebut adalah array.

2. Ada pilihan kondisi yang kurang tepat. Misalnya pada kondisi pertama, value hanya dibatasi sampai 4000. Padahal kode dapat dieksekusi dengan range yang lebih jauh.

##Roman Numerals 2
1. Solusi dapat dieksekusi dengan baik,
2. Solusi sangat tidak readable. Sulit sekali membaca fungsi to_roman. Ada beberapa hal yang membuat kami kesulitan melakukan pembacaan terhadap kode tersebut.
 - nama variabel yang kurang deskriptif. Dibandingkan dengan kode pertama, pada kode kedua variabel tidak dinamakan dengan baik. Sebagai contoh, pada input kode kedua memiliki variable digit yang ternyata menghasilkan array yang membagi input menjadi beberapa elemen dalam array.
 - Penamaan variabel i. Lebih baik lebih deskriptif seperti counter atau sebagainya. Penamaan dengan simbol i seharusnya dilengkapi oleh dokumentasi.
 - Intentasi kode. Variabel hanya di-diclare sekali yaitu diawal digit. Selebihnya, key, dan i mengikuti deklarasi tersebut. Ini tidak dibuat implisit.
 
##Roman Numerals 3
1. Solusi tidak dapat dieksekusi.
2. Pada if condition di dalam ```for loop``` terdapat **bugs**. Parameter boolean selalu tidak terpenuhi, maka while akan terus dieksekusi, atau infinite loop. Akan tetapi, kode ini lebih baik dibandingkan dengan kode kedua karena adanya dokumentasi yang baik. Sehingga tracking lebih mudah.

##Roman Numerals 4
1. Solusi dapat dieksekusi secara langsung tanpa adanya bugs.
2. Kode berjalan dengan baik. Penamaan variabel juga cukup deskriptif sehingga meskipun tidak adanya dokumentasi. Iti tetap memudahkan kita untuk memahami kode.
