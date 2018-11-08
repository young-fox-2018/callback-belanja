const beli = require('/Users/zhang/phase1/p1w2/callback-belanja/beli.js')

const obj = {
  item: 'permen',
  harga: 15000,
  waktu: 1000
}

const obj2 = {
  item: 'pita',
  harga: 4000,
  waktu: 1000
}
const obj3 = {
  item: 'roti',
  harga: 2000,
  waktu: 1000
}
const obj5 = {
  item: 'mainan',
  harga: 1000,
  waktu: 1000
}
const obj4 = {
  item: 'kue',
  harga: 3000,
  waktu: 1000
}

beli(10000,obj , function(kembalian){
  beli(kembalian,obj2,function(kembalian){
    beli(kembalian, obj3, function(kembalian){
      beli(kembalian , obj4, function(kembalian){
        beli(kembalian , obj5 , function(kembalian){
          console.log(`ini kembaliannya , ${kembalian}`)

        })
      })
    })
  })
})