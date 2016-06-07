<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>(2)Php</title>
  </head>
<link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">

<div class="sual">


<?php

if ($_POST) {
           if ($_POST  ["yas"] == "") {
            echo "<p>Yaşı Yazmağı Unutma!<br /></p>";
}
if ($_POST  ["adinsoyadin"] == "") {
 echo "<p>Adı Yazmağı Unutma!<p />";
}
echo "Göndərmə Uğurlu Oldu!";
}
else {
    echo '
     <form action="" method="post">
    <table cellpadding="5" cellspacing="5 ">
   <tr>
     <td>Ad-Soyad:</td>
     <td><input type="text" name="adinsoyadin"/></td>
   </tr>

   <tr>
     <td>Yas:</td>
     <td><input type="password" name="yas"/></td>
   </tr>
   <tr>
     <td>Sehir:</td>
     <td><select name="mekan">
     <option value="Baku">Baku</option>
     <option value="khaglardosluku">Xalqlar Dostluğu</option>
     <option value="akhmedli">Akhmedli</option>
</select>

     </td>
   </tr>
   <tr>
     <td></td>
     <td><input class=btn type="submit" value="Gonder"/></td>
   </tr>
 </table>
</form>';
}
 ?>
</div>
 <body>

 </body>
</html>
