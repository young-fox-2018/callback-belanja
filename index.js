const beli = require("./beli.js")
let monitor = {
    item: "monitor",
    harga: 1000,
    waktu: 1000
}
let keyboard = {
    item: "keyboard",
    harga: 300,
    waktu: 500
}
let mouse = {
    item: "mouse",
    harga: 50,
    waktu: 500
}
let uang = 10000
beli(uang, monitor, function (callback) {
    beli(uang, keyboard, function (callback) {
    })
})
