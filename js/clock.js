var tarih = new Date();
var yil = tarih.getFullYear();
var ay = tarih.getMonth();
var gun = tarih.getDay();
var saat = tarih.getHours();
var dakika = tarih.getMinutes();
var saniye = tarih.getSeconds();
let myClock = document.querySelector("#myClock");
myClock.innerHTML =
  gun + "/" + ay + "/" + yil + " " + saat + ":" + dakika + ":" + saniye;
