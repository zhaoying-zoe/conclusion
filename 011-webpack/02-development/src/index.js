import './index.css';// 配合css-loader 导入css文件

//require('./index.css') // CommonJs模块标准引入
// import "./index.css" // ES6 Module模块标准引入

import img from './icon.jpg';

let oImg0 = new Image();
oImg0.src = img;


var oImg = document.createElement('img');
oImg.src = img;
var oDiv = document.createElement('div');
oDiv.appendChild(oImg);
oDiv.appendChild(oImg0);

document.querySelector('body').appendChild(oDiv);

console.log('webpack hello index');