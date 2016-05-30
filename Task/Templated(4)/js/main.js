$(document).ready(function(){
$(".left").click(function(){
$("#myCarousel").carousel('prev');
});

$(".right").click(function(){
$("#myCarousel").carousel('next');
});

$(".slide-one").click(function(){
$("#myCarousel").carousel(0);
});
$(".slide-two").click(function(){
$("#myCarousel").carousel(1);
});
$(".slide-three").click(function(){
$("#myCarousel").carousel(0);
});
});