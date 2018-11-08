function beli(uang, obj, cb){
  if (uang < obj.harga) {
      console.log("Duit g cukup broo")
  } 
  
  setTimeout(function(){
    if (uang-obj.harga >= 0) {
      let kembalian = uang - obj.harga
      console.log(`Saya pergi membeli ${obj.item}`)
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      if (uang > 0) {
          cb(uang)
      } else {
          cb(0) // buat apa code ini??
         // console.log("masuk")
          //console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      }
    }
}, obj.waktu);
}

module.exports = beli;
