const beli = require('./beli.js');

var permen = {
  item: "permen",
  harga: 1000,
  waktu: 1000
}

var bir = {
  item: "bir",
  harga: 75000,
  waktu: 1000
}

var mekdi = {
  item: "mekdi",
  harga: 40000,
  waktu: 1000
}

var beras = {
  item: "beras",
  harga: 60000,
  waktu: 1000
}

var cerutu = {
  item: "cerutu",
  harga: 150000,
  waktu: 1000
}

beli(50000, permen, function(kembalian){
  beli(kembalian, bir, function(kembalian){
    beli(kembalian, mekdi, function(kembalian){
      beli(kembalian, beras, function(kembalian){
        beli(kembalian, cerutu, function(){
          console.log("Selesai belanja, saya mau pesta !!!");
        })
      })
    })
  })
})