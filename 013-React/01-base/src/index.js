import React from 'react';
import ReactDom from 'react-dom';
// 引入moduleA.js文件
import { a } from './moduleA';
import { b } from './moduleA';

// 1 定义并且导出
console.log(a);// 要在上边引入

// 2 先定义后导出
console.log(b);// 要在上边引入

// 3 引入时添加别名
//import可以使用as关键字将输入的变量重命名
import { c as d } from './moduleA.js'
console.log(d);

// 4 导出时添加别名
//export时as关键字重命名变量e的名字为f,所以在引入时用f
import { f } from './moduleA.js'
console.log(f);

// 5 使用default关键字
import aa from './moduleA.js';
console.log(aa);

// ReactDom.render(要放什么元素html代码,放哪个节点里 需要html里有一个节点);
ReactDom.render(<h1>hello react</h1>, document.getElementById('root'));