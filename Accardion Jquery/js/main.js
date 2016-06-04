$("#id1").click(function  () {
	$("#id2").toggle(1000);
	$("#id4").hide(1000);
	$("#id6").hide(1000);

})
$("#id3").click(function  () {
	$("#id4").toggle(1000);
	$("#id6").hide(1000);
})
$("#id5").click(function  () {
	$("#id6").toggle(1000);
})

$("#id3").click(function  () {
	$("#id2").hide(1000);
})
$("#id5").click(function  () {
	$("#id4").hide(1000);
	$("#id2").hide(1000);

})


