"use strict"

const beli = require('./beli')
let sugar = {
    item: 'sugar',
    harga : 3000,
    waktu : 5
}

let milk = {
    item:'milk',
    harga : 3000,
    waktu : 4
}

let chocolate = {
    item: 'chocolate',
    harga : 3000,
    waktu : 3
}

let soap = {
    item: 'soap',
    harga : 2000,
    waktu : 2
}

let brush = {
    item: 'brush',
    harga : 5000,
    waktu : 1
}

beli(10000, sugar, function(money) {
    beli(money, milk,function(money) {
        beli(money, chocolate, function(money) {
            beli(money, brush, function(money) {
                beli(money, soap, function(money) {
                })
            })
        })
    } )

})