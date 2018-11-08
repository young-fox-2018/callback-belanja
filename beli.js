function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian <= 0) {
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`)
    }
    else{
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }
  }, obj.waktu);
}

let cash = 100
let itemList = [
  {
    item: "permen",
    harga: 50,
    waktu: 1000
  },
  {
    item: "roti",
    harga: 150,
    waktu: 1000
  },
  {
    item: "HP",
    harga: 500,
    waktu: 1000
  },
  {
    item: "sticker",
    harga: 10,
    waktu: 1000
  },
  {
    item: "drinks",
    harga: 90,
    waktu: 1000
  }
]

beli(cash,itemList[0], function(kembalian){
  beli(kembalian, itemList[1], function(kembalian2){
    beli(kembalian2, itemList[2], function(kembalian3){
      beli(kembalian3, itemList[3], function(kembalian4){
        beli(kembalian4,itemList[4], function(kembalian5){
          console.log(kembalian5)
        })
      })
    })
  })
})
// console.log(kembalian)

module.exports = beli;
