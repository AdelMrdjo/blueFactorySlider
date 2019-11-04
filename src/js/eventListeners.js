import $ from 'jquery';
import {goLeft,goRight} from './functions.js';
import { leftNormal,leftHover,rightNormal,rightHover } from './buttons.js';

$(".leftButton").click(goLeft);
$(".rightButton").click(goRight);

$(".leftButton").hover(function(){ /*Left button*/
  $(".leftButton img").attr("src", leftHover);
  }, function(){
  $(".leftButton img").attr("src", leftNormal);
});
$(".rightButton").hover(function(){ /*Right button*/
  $(".rightButton img").attr("src", rightHover);
  }, function(){
  $(".rightButton img").attr("src", rightNormal);
});