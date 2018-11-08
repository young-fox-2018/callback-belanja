const beli = require('./beli')
let obj = [
    {
        item : "permen karet",
        harga : 200,
        waktu : 2000
    },{
        item : "permen jahe",
        harga : 350,
        waktu : 3000
    },{
        item : "permen gula",
        harga : 100,
        waktu : 1000
    },{
        item : "permen cabe",
        harga : 300,
        waktu : 4000
    },{
        item : "permen kopi",
        harga : 600,
        waktu : 5000
    },
  ]
let uang = 1000

beli(uang, obj[0], (kembalian) => {
    beli(kembalian, obj[1], (kembalian) => {
        beli(kembalian, obj[2], (kembalian) => {
            beli(kembalian, obj[3], (kembalian) => {
                beli(kembalian, obj[4], (kembalian) => {
                })
            })
        })
    })
})