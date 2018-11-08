const beli = require('./beli')

const permen = {
    item: 'permen',
    harga: 1000,
    waktu: 500
}
  
const roti = {
    item: 'roti',
    harga: 200000,
    waktu: 500
}

const telur = {
    item: 'telur',
    harga: 5000,
    waktu: 500
}
  
const sayur = {
    item: 'sayur',
    harga: 1000,
    waktu: 500
}

const daging = {
    item: 'daging',
    harga: 11000,
    waktu: 500
}
  
  beli(20000, permen, function(kembalian){
    beli(kembalian, roti,function(kembalian){
      beli(kembalian, telur, function(kembalian){
        beli(kembalian , sayur, function(kembalian){
          beli(kembalian , daging, function(kembalian){
              console.log(`sisa uang ${kembalian}`);
          })
        })
      })
    })
  })
