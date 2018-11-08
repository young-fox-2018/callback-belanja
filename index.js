const beli = require('./beli');
let kronos = {item: 'kronos',harga: 15000, waktu: 1200}
let motif = {item: 'motif',harga: 5000,waktu: 500}
let grandStage = {item: 'grandStage',harga: 200000,waktu: 1000}
let kross2 = {item: 'kross2',harga: 10000,waktu: 1500}
let rd7000 = {item: 'rd7000',harga: 20000,waktu: 200}
let artis4 = {item: 'artis4',harga: 20000,waktu: 200}

beli(250000, kross2, function(kembalian){
  beli(kembalian, motif, function(kembalian){
    beli(kembalian, grandStage, function(kembalian) {
      beli(kembalian, artis4, function(kembalian){
        beli(kembalian, rd7000, function(kembalian){
        console.log(`Sisa uang saya adalah ${kembalian}`);
        })
      })
    })
  })
});
