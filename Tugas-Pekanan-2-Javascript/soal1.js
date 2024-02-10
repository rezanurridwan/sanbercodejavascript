const prompt = require('prompt-sync')({sigint: true});

const userInput = prompt("Masukkan bilangan genap: ");
let angka = parseInt(userInput);

if (angka < 0) {
    console.log("Tidak bisa input bilangan negatif");
} else if (angka % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
} else {
    let result = Math.sqrt(angka);
    console.log(`Akar pangkat 2 dari ${angka} adalah: ${result}`);
}
