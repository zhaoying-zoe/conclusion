// 自定义组件首字母大写
import React,{Component} from 'react';
// 引入子组件
import UserInfo from './UserInfo';


// 方法一:定义一个类
class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='App'>
                {/* 传值给子组件  name={'臭猪'} age={12} desc={'是晓雪'}  */}
                <UserInfo name={'臭猪'} age={12} desc={'是晓雪'} />
            </div>
        )
    }
}

// 导出组件App
export default App;