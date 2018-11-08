const beli = require('./beli')

let itemPertama = {
    item: 'bawang',
    harga: 4000,
    waktu: 1000
}

let itemKedua = {
    item: 'ketoprak',
    harga: 15000,
    waktu: 1000
}

let itemKetiga = {
    item: 'sayur',
    harga: 2000,
    waktu: 1000
}

let itemKeempat = {
    item: 'arak',
    harga: 8000,
    waktu: 1000
}

let itemKelima = {
    item: 'bawal',
    harga: 20000,
    waktu: 1000
}
beli(500, itemPertama, function (kembalian) {
    beli(kembalian, itemKedua, function (kembalian) {
        beli(kembalian, itemKetiga, function (kembalian) {
            beli(kembalian, itemKeempat, function (kembalian) {
                beli(kembalian, itemKelima, function (kembalian) {
                    console.log(`kembaliannya ada lah ${kembalian}`)
                })
            })
        })
    })
})
