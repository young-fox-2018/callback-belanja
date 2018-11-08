function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= obj.harga) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else if (kembalian < obj.harga){
      console.log(`uang gk cukup nih buat beli ${obj.item} sisa uang ${uang}. masih kurang ${Math.abs(kembalian)}`);
    }
  }, obj.waktu);
}

module.exports = beli;
