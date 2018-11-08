const beli = require('./beli')


let obj1 = {
        item: 'Nasi Goreng',
        harga: 15000,
        waktu: 15
    },
    obj2 = {
        item: 'Mie Goreng',
        harga: 10000,
        waktu: 10
    },
    obj3 = {
        item: 'Bebek Madura',
        harga: 20000,
        waktu: 20
    },
    obj4 = {
        item: 'Cendol',
        harga: 10000,
        waktu: 3
    },
    obj5 = {
        item: 'Rujak',
        harga: 6000,
        waktu: 5
    }


beli(100000, obj1, (kembalian) => {
    beli(kembalian, obj2, (kembalian) => {
        beli(kembalian, obj3, (kembalian) => {

        })
    })
})