// 自定义组件首字母大写
import React,{Component} from 'react';

// 方法一:定义一个类
class App extends Component{
    handleAdd(){
        console.log('handleAdd...');
        console.log(this);// 方法一 如果想打印this需要调用时bind一下this
    }
    render() {
        return (
            <div 
                // 第一个this是组件App 第二个this是传入this
                // onClick={this.handleAdd.bind(this)} 方法一
                
                /* 方法二 回调中使用箭头函数;里面是函数 所以要加括号 */
                onClick={()=>{ this.handleAdd() }}
            >
                <input />
                <button>提交</button>
            </div>
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