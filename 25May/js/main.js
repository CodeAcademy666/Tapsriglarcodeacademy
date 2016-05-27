// // $ (document).ready(function () {
// //   $(".main")
// //   .css({"width":"50px;",
// //   "heigth":"200px;",
// //   "background":"green"
// // )}
// // .click(function(){
// //   $(this).css({
// //     "background":"red",
// //     "width":"60px";
// //   })
// // }
// // )
// //  })
// $(document).ready(function(){
//   $(".main")
//   .html("salam mk")
//   .attr('id','main')

// });
// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
$(document).ready(function() {
	$(".main")
	.css({
		"width":"150px",
		"height":"300px",
		"background":"green"
	})
	.html("gozler axir hecuu")
	.attr('id', 'main')
	.click(function() {
		$(this)
		.animate({
		"width":"600px",
		"height":"500px",
		"margin-left":"300px",
		"marginTop":"350px",
		"margin-left":"300px",
		});
	});
	
});
