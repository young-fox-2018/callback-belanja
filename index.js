let buy = require('./beli.js')
let counter = 0
let obj = [{
    item: "pete",
    harga: 10000,
    waktu: 1000
}, {
    item: "sayur",
    harga: 15000,
    waktu: 1500
}, {
    item: "bensin",
    harga: 50000,
    waktu: 2000
}, {
    item: "furniture",
    harga: 200000,
    waktu: 5000
}, {
    item: "mainan",
    harga: 15000,
    waktu: 1000
}]
function check(uang) {
    if (uang == 0) {
        console.log("Selesai beli");
    } else if(uang >0){
        counter++
        buy(uang,obj[counter],check)
    }
}

buy(250000, obj[counter], check)






