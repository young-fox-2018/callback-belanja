const beli = require('./beli')

let obj = [{
    item: 'baso',
    harga: 5000,
    waktu: 100
},{
    item: 'somay',
    harga: 50000,
    waktu: 100
},{
    item: 'laptop',
    harga: 20000,
    waktu: 100
},{
    item: 'saham',
    harga: 100,
    waktu: 100
},{
    item: 'hengpong jadul',
    harga: 4000,
    waktu: 100
}

]

beli(1500, obj[0], function(kembalian){
    beli(kembalian, obj[1], function(kembalian){
        beli(kembalian, obj[2], function(kembalian){
            beli(kembalian, obj[3], function(kembalian){
                beli(kembalian, obj[4], function(kembalian){

                })
            })
        })
    })
})