// 自定义组件首字母大写
import React,{Component,Fragment} from 'react';// 需要引入React

// 方法一:定义一个类
// React.Component == Component;
class App extends Component{
    render() {
        { /* 其实是return一个div,div里面包括了其他标签 */ }
        {/* 在返回组件内容时,如果不想有多余的标签,可以使用React.Fragment来代替html标签 */}
        return (
            <Fragment>
                <input />
                <button>提交</button>
            </Fragment >
        )
    }
}


/*
// 方法二:编写 JavaScript 函数

function App() {
    return (
        <div>
            <h1>
                hello React;
            </h1>
        </div>
    )
}
*/
// 导出组件App
export default App;