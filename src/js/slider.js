import $ from 'jquery';
import { addPicture } from './functions.js';
import sliderImage1 from '../img/slider-image-1.jpg';
import sliderImage2 from '../img/slider-image-2.jpg';
import sliderImage3 from '../img/slider-image-3.jpg';
import sliderImage4 from '../img/slider-image-4.jpg';
import sliderImage5 from '../img/slider-image-5.jpg';
import sliderImage6 from '../img/slider-image-6.jpg';
import sliderImage7 from '../img/slider-image-7.jpg';
import sliderImage8 from '../img/slider-image-8.jpg';
import sliderImage9 from '../img/slider-image-9.jpg';

var firstRow = [sliderImage1,sliderImage2,sliderImage3,sliderImage4,sliderImage5];
var secondRow = [sliderImage6,sliderImage7,sliderImage8,sliderImage9];

for(var k=0;k<firstRow.length;k++) {
	addPicture(".firstRow .onlyImages",firstRow[k]);
}
for(var k=0;k<secondRow.length;k++){
	addPicture(".secondRow .onlyImages",secondRow[k]);
}