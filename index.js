let beli = require('./beli')

let listBelanja = [
    { item: 'T-Shirt', harga: 30000, waktu: 1000 },
    { item: 'Jeans', harga: 50000, waktu: 500 },
    { item: 'Jacket', harga: 80000, waktu: 1000 },
    { item: 'Sneaker', harga: 100000, waktu: 1500 }
]
let budget = 260000
if (budget >= listBelanja[0].harga) {
    beli(budget, listBelanja[0], function (kembalian) {
        if (kembalian) {
            beli(kembalian, listBelanja[1], function (kembalian) {
                if (kembalian) {
                    beli(kembalian, listBelanja[2], function (kembalian) {
                        if (kembalian) {
                            beli(kembalian, listBelanja[3], function () {
                            })
                        }
                    })
                }
            })
        }
    })
} else {
    console.log(`Uang tidak cukup untuk membeli ${listBelanja[0].item}`)
}