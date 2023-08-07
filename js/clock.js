function tarihSaat() {
  var date = new Date().toLocaleString("tr-TR");
  document.querySelector("#myClock").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);
