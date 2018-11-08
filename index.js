const beli = require('./beli');
const money = 100000;

const clothes = {
    item: 'baju',
    harga: 10000,
    waktu: 1000
}
const skirt = {
    item: 'rok',
    harga: 15000,
    waktu: 2000
}
const ribbon = {
    item: 'pita',
    harga: 2000,
    waktu: 500
}
const dress = {
    item: 'gaun',
    harga: 45000,
    waktu: 5000
}
const shoes = {
    item: 'high heel',
    harga: 35000,
    waktu: 3000
}

beli(money, clothes, function(money) {
    beli(money, skirt, function(money){
        beli(money, ribbon, function(money) {
            beli(money, dress, function(money) {
                beli(money, shoes, function() {
                })
            })
        })
    })
})