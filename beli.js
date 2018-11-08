// let uang = 200000
let sayur = { item: 'sayur', harga: 35000, waktu: 1500 }
let ayam = { item: 'ayam', harga: 30000, waktu: 1500 }
let ikan = { item: 'ikan', harga: 26000, waktu: 1500 }
let tahu = { item: 'tahu', harga: 5000, waktu: 1500 }
let snack = { item: 'snack', harga: 2500, waktu: 1500 }

function beli(uang, obj, cb) {

  console.log(`Saya pergi membeli ${obj.item}`)

  setTimeout(function () {
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    } else {
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);

}

module.exports = beli;

beli(150000, sayur, function (kembalian) {
  beli(kembalian, ayam, function (kembalian) {
    beli(kembalian, ikan, function (kembalian) {
      beli(kembalian, tahu, function (kembalian) {
        beli(kembalian, snack, function (kembalian) {

        })
      })
    })
  })
})