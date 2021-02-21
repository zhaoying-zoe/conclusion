import React from 'react';
import ReactDom from 'react-dom';


import App from './App.js'


// ReactDom.render(要放什么元素html代码,放哪个节点里 需要html里有一个节点);
ReactDom.render(<App />, document.getElementById('root'));