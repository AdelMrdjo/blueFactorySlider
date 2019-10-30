var animStarted = false; //while animating, disable clicks
function goLeft(){ //function for moving pictures to left side
	if(!animStarted){
		animStarted = !animStarted;
		/*First row pictures*/
		var firstRowFirstItem = $('.firstRow .onlyImages').children(":first").width();//width from first picture first row
		var newPictureAttr = $('.firstRow .onlyImages').children(":first").attr('src');//first url picture first row
		var newPicture = $('<img>');//new picture
		newPicture.attr('src',newPictureAttr);//new picture
		$('.firstRow .onlyImages').append(newPicture);//new picture append on the end of row
		$('.firstRow .onlyImages').children(":first").remove();//remove first picture first row
		$('.firstRow .onlyImages').children(":last").width(0);//for animaction
		$('.firstRow .onlyImages').children(":last").width(firstRowFirstItem);//for animation
		/*Second row pictures*/
		var secondRowFirstItem = $('.secondRow .onlyImages').children(":first").width();//width from first picture second row
		var newPictureAttr = $('.secondRow .onlyImages').children(":first").attr('src');//first url picture second row
		var newPicture = $('<img>');//new picture
		newPicture.attr('src',newPictureAttr);//new picture
		$('.secondRow .onlyImages').append(newPicture);//new picture append on the end of row
		$('.secondRow .onlyImages').children(":first").remove();//remove first picture second row
		$('.secondRow .onlyImages').children(":last").width(0);//for animation
		$('.secondRow .onlyImages').children(":last").width(secondRowFirstItem);//for animation
		setTimeout(function(){ animStarted = !animStarted; }, 1000);
	}
}
function goRight(){ //function for moving pictures to right side
	if(!animStarted){
		animStarted = !animStarted;
		/*First row pictures*/
		var firstRowLastItem = $('.firstRow .onlyImages').children(":last").width();//width from last picture first row
		$('.firstRow .onlyImages').children(":last").width(firstRowLastItem);//for animation
		$('.firstRow .onlyImages').children(":last").width(0);//for animation
		var newPictureAttr = $('.firstRow .onlyImages').children(":last").attr('src');//last url picture first row
		var newPicture = $('<img>');//new picture
		newPicture.attr('src',newPictureAttr);//new picture
		$('.firstRow .onlyImages').prepend(newPicture);//new picture append on the start of row
		setTimeout(function(){ $('.firstRow .onlyImages').children(":last").remove(); }, 1000);//after second delete old picture
		/*Second row pictures*/
		var secondRowLastItem = $('.secondRow .onlyImages').children(":last").width();//width from last picture second row
		$('.secondRow .onlyImages').children(":last").width(secondRowLastItem);//for animation
		$('.secondRow .onlyImages').children(":last").width(0);//for animation
		var newPictureAttr = $('.secondRow .onlyImages').children(":last").attr('src');//last url picture second row
		var newPicture = $('<img>');//new picture
		newPicture.attr('src',newPictureAttr);//new picture
		$('.secondRow .onlyImages').prepend(newPicture);//new picture append on the start of row
		setTimeout(function(){ $('.secondRow .onlyImages').children(":last").remove(); }, 1000);//after second delete old picture
		setTimeout(function(){ animStarted = !animStarted; }, 1000);
	}
}
/*Event listeners*/
$(".leftButton").hover(function(){ /*Left button*/
  $(".leftButton img").attr("src", "img/arrow-blue-left.png");
  }, function(){
  $(".leftButton img").attr("src", "img/arrow-gray-left.png");
});
$(".rightButton").hover(function(){ /*Right button*/
  $(".rightButton img").attr("src", "img/arrow-blue-right.png");
  }, function(){
  $(".rightButton img").attr("src", "img/arrow-gray-right.png");
});
$(".leftButton").click(goLeft);
$(".rightButton").click(goRight);
/*============================ANGULARJS===============================*/
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.firstRow = [
		"slider-image-1.jpg",
		"slider-image-2.jpg",
		"slider-image-3.jpg",
		"slider-image-4.jpg",
		"slider-image-5.jpg"
	];
	$scope.secondRow = [
		"slider-image-6.jpg",
		"slider-image-7.jpg",
		"slider-image-8.jpg",
		"slider-image-9.jpg"
	];
});