"use strict"
const beli = require("./beli")


let objek = {
    item: "bread",
    harga: 50000,
    waktu: 200
}

let objek2 = {
    item: "ikan",
    harga: 40000,
    waktu: 300
}
let objek3 = {
    item: "sayur",
    harga: 20000,
    waktu: 300
}
let objek4 = {
    item: "buah",
    harga: 50000,
    waktu: 300
}
let objek5 = {
    item: "emas",
    harga: 50000,
    waktu: 300
}

beli(30000, objek, function(kembalian){
    beli(kembalian, objek2, function(kembalian){
        beli(kembalian, objek3, function(kembalian){
            beli(kembalian, objek4,function(kembalian){
                beli(kembalian,objek5,function(kembalian){

                })

            })
        })
    })
})