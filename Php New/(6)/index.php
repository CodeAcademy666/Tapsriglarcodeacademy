<?php
 class Kalici {

function __toString(){
return "Bu sınıf final olarak deklare edildiğinden, genişletilemez...";
}
}
class Doviz {
  function dovizCinsi() {
 return "Bilinmiyor...";
 }
 }

 class Dolar extends Doviz {

 function dovizCinsi(){
 return "Döviz cinsi: Dolar...";
 }
 }

 $dolar = new Dolar;
 echo $dolar->dovizCinsi(); //Cannot override final method
 //hatası alınır

 $kalici = new Kalici;
 echo $kalici; //"Bu sınıf final olarak deklare
 //edildiğinden, genişletilemez..."
 //stringi çıktılanacaktır
 ?>
