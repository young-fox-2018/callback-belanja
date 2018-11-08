const beli = require('./beli')

const barang1 = {
    item : "Tas",
    harga: 5000,
    waktu: 3000
}
const barang2 = {
    item : "Baju",
    harga: 4500,
    waktu: 1500,
}
const barang3 = {
    item : "celana",
    harga: 3000,
    waktu: 2000,
}
const barang4 = {
    item : "sepatu",
    harga: 10000,
    waktu: 1000,
}
const barang5 = {
    item : "bunga",
    harga: 3500,
    waktu: 1500,
}

beli(8500,barang1,function(kembalian){
    beli(kembalian,barang2,function(kembalian){
        beli(kembalian,barang3,function(kembalian){
            beli(kembalian,barang4,function(kembalian){
                beli(kembalian,barang5,function(kembalian){

                })
            })
        })
    } )
})