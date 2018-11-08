const beli = require("./beli")
let obj1 = { item: "permen", harga: 1500 }
let obj2 = { item: "roti", harga: 1000 }
let obj3 = { item: "eskrim", harga: 2000 }
let money = 5000
beli(money, obj1, function (data) { beli(data, obj2, function (data) { beli(data, obj3, function (data) { beli(data, obj2, function (data) { beli(data, obj2, function (data) { }) }) }) }) })