function beli(uang, obj, cb) {
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function () {
    let kembalian = uang - obj.harga
    if ((kembalian - obj.harga) >= 0) {
      cb(kembalian)
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
    } else {
      if ((kembalian - obj.harga) < 0) {
        cb(0)
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);

      }
    }
  }, obj.waktu);
}

module.exports = beli;
