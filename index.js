const beli = require('./beli')

let roti = {
    item: 'Roti',
    harga: 4000,
    waktu: 2000
}

let daging = {
    item: 'Daging',
    harga: 10000,
    waktu: 2500
}

let air = {
    item: 'Air',
    harga: 2500,
    waktu: 500
}

beli(30000, roti, function(kembalian) {
    beli(kembalian, daging, function(kembalian) {
        beli(kembalian, roti, function(kembalian) {
            beli(kembalian, daging, function(kembalian) {
                beli(kembalian, air, function(kembalian) {
                    console.log(`----belanja selesai----`);
                })
            })
        })
        
    })
})