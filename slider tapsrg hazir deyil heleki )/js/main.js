var imageCount = 1;
var total = 6;

function photo(a) {
	var image = document.getElementById('image');
	imageCount = imageCount + a;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	clearInterval(time); 								
	time =  window.setInterval(function photoA() { 		
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},2000);
	}
 
var time = window.setInterval(function photoA() {    
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},2000);

