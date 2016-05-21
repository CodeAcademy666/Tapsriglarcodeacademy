// function myFunction() {
//     var basla = document.getElementsByName("fname")[0].tagName;
//     document.getElementById("myid").innerHTML = basla;
// }

// document.getElementsByClassName("photo")[1].style.background="#00695C";
function myFunction() {
    var h3 = document.getElementsByTagName("H3")[0];
    var att = document.createAttribute("class");
    att.value = "democlass";
    h3.setAttributeNode(att);
}