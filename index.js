const beli = require("./beli")
const obj = require("./object.json")


//function beli(uang, obj, cb)
let uang = 15000
beli(uang, obj[0], function(kembalian){
    beli(kembalian, obj[1], function(kembalian2) {
        beli(kembalian2, obj[2], function(kembalian3){
            beli(kembalian3, obj[3], function(kembalian4){
                beli(kembalian4, obj[4], function(kembalian5) {
                    console.log(kembalian5)
                })
            })
        })
    })
})