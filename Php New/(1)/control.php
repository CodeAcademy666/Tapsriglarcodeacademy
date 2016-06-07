<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
    <title>Php Post Metot</title>
  </head>
  <body>


<?php


$adinsoyadin = $_POST ["adinsoyadin"];
$yas = $_POST ["yas"];
// $mekan=$_POST ["mekan"];

if ($ad ="" || $yas== "") {
  echo "Eror 404Get burdan";

}
else if ($ad =="admin"|| $yas== "admin1") {
  echo "Xos Geledin Idareci";

}
else {
     echo $adinsoyadin." ".$yas;
}



 ?>


  </body>
</html>
