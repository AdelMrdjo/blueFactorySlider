import $ from 'jquery';
import leftHover from '../img/arrow-blue-left.png';
import leftNormal from '../img/arrow-gray-left.png';
import rightHover from '../img/arrow-blue-right.png';
import rightNormal from '../img/arrow-gray-right.png';

import { addPicture } from './functions.js';

addPicture(".leftButton",leftNormal);
addPicture(".rightButton",rightNormal);

export {leftHover,leftNormal,rightNormal,rightHover}