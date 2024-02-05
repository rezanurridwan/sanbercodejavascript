const prompt = require('prompt-sync')({sigint: true});


// let input = prompt ('Masukan angka = ');
// input = Math.sqrt(2)
// for (let i= 0; i < input; i++) {
//     if(i % 2 == 1){
//         console.log("Tidak bisa input bilangan ganjil");
//     }else if (i < 0){
//         console.log("Tidak bisa input bilangan negatif")
//     }
    
// }
// console.log(input);

// Menggunakan prompt untuk mendapatkan input dari pengguna
let userInput = prompt("Masukkan bilangan genap: ");

// Mengonversi input ke tipe data number
let angka = parseFloat(userInput);

// Kondisi untuk mengecek bilangan genap atau tidak
if (angka < 0) {
    console.log("Error: Tidak bisa input bilangan negatif");
} else if (angka % 2 !== 0) {
    console.log("Error: Tidak bisa input bilangan ganjil");
} else {
    // Menghitung akar pangkat 2 dari bilangan genap
    let result = Math.sqrt(angka);
    console.log(`Akar pangkat 2 dari ${angka} adalah: ${result}`);
}
