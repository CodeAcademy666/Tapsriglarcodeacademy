// a=true;
//
//
// function yandir(){
// document.write("<button onclick='yandir()'>Click</button>")
// if(a){
//   document.write("<div style='width:150px; height:200px; background:red;'></div>");
//   document.close()
//   a=false;
// }else{
//   document.write("<div style='width:150px; height:200px; background:black;'></div>");
//   document.close()
//   a=true;
// }
//
// }
// yandir()
var img=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"]
i=0;
function next(){
  i++;
 gallery()
 document.close()
 return i;

}
function prev(){
  i--;
 gallery()
 document.close()
    return i;

}
function gallery(){
  document.write("<div class='slider'>");
      document.write("<div class='slider-item'>");
          document.write("<img src="+img[i]+" style='width:500px;'>");
      document.write("</div>");
      document.write("<div class='btns'>");
          document.write("<div class='left' onclick='prev()' style=' width:100px; height:50px; cursor: pointer; background:gray;'>Prev</div>");
          document.write("<div class='right' onclick='next()' style=' width:100px; height:50px; cursor: pointer; background:gray;'>Next</div>");
      document.write("</div>");
  document.write("</div>");
}
gallery();

