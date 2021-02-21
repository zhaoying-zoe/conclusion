// 自定义组件首字母大写
import React,{Component} from 'react';

// 方法一:定义一个类
class App extends Component{
    constructor(props){
        super(props);
        // 初始化state
        this.state = {
            content:'',
        }
    }
    handleAdd(){
        console.log('handleAdd...');
        console.log(this);// 方法一 如果想打印this需要调用时bind一下this
    }
    handleChange(ev,props){
        // ev.target 可以找到input输入框
        // console.log(ev.target.value);

        // 错误用法 ↓
        // this.state.content = ev.target.value

        // 改变state : 异步操作
        /*
        // 方法一
        this.setState({
            content : ev.target.value,
        })
        console.log(this.state);
        */
        // 方法二
        const content = ev.target.value;
        // 第一个箭头函数 省略了 return 和 {}
        this.setState(()=>({content:content})
        ,()=>{
            console.log(this.state.content);
        })
    }
    render() {
        return (
            <div 
                onClick={()=>{ this.handleAdd() }}
            >
                {/* 给input的value绑定 state的值 */}
                <input value={this.state.content} onChange={this.handleChange.bind(this)} />
                <button>提交</button>
            </div>
        )
    }
}

// 导出组件App
export default App;