// 自定义组件首字母大写
import React,{Component} from 'react';
// 引入子组件
import UserInfo from './UserInfo';


// 方法一:定义一个类
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            age:19
        }
    }
    //在父组件中定义需要传递的方法
    handleAddAge(age){
        this.setState({
            age:age
        })
    }
    render() {
        return (
            <div className='App'>
                <UserInfo name={'臭猪'} age={this.state.age} desc={'是晓雪'} handleAddAge={this.handleAddAge.bind(this)} />
            </div>
        )
    }
}

// 导出组件App
export default App;