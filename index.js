const beli = require('./beli')

let items = [
    {
        item: 'stang seher',
        harga: 200000,
        waktu: 2000
    },
    {
        item: 'ring seher',
        harga: 100000,
        waktu: 2000
    },
    {
        item: 'laher roda',
        harga: 50000,
        waktu: 2000
    },
    {
        item: 'karbu pwk',
        harga: 1000000,
        waktu: 2000   
    },
    {
        item: 'gir tiger',
        harga: 600000,
        waktu: 2000
    }
]

beli(800000, items[0], function(kembalian) {
    beli(kembalian, items[1], function(kembalian) {
        beli(kembalian, items[2], function(kembalian) {
            beli(kembalian, items[3], function(kembalian) {
                beli(kembalian, items[4], function(kembalian) {
                    
                })
            })
        })
    })
})