let beli = require("./beli.js")

let obj = {
    item: "makanan",
    harga: 5000,
    waktu: 100
}

let obj2 = {
    item: "minuman",
    harga: 5000,
    waktu: 1000
}

let obj3 = {
    item: "baju",
    harga: 25000,
    waktu: 2000
}

let obj4 = {
    item: "sepatu",
    harga: 400000,
    waktu: 2000
}

let obj5 = {
    item: "jaket",
    harga: 100000,
    waktu: 2000
}

beli(400000,obj,function(kembalian){
    beli(kembalian, obj2, function(kembalian){
        beli(kembalian, obj3, function(kembalian){
            beli(kembalian, obj4, function(kembalian){
                beli(kembalian, obj5, function(kembalian){
                    console.log("udahan dulu deh shopingnya, capek")
                })
            })
        })
    })
})



