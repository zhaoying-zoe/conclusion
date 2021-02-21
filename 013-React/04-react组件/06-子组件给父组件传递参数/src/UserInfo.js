import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UserInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // 接收来自父组件传来的方法
        const { name, age, desc, handleAddAge } = this.props;
        return (
            <div className='userinfo'>
                <h1>
                    用户信息
                </h1>
                <div>用户名:{name}</div>
                <div>年龄:{age}</div>
                <div>描述:{desc}</div>
                <div>
                    {/* 调用父组件传来的方法 并且传入一个随机数 */}
                    <button onClick={() => { handleAddAge(parseInt(Math.random() * 100)) }} >点击</button>
                </div>
            </div>
        )
    }
}

// 罗列参数并且定义参数的校检规则
UserInfo.propTypes = {
    name: PropTypes.string.isRequired,// isRequired 表示 这个参数必须要 传值
    age: PropTypes.number,
    desc: PropTypes.string,
}

// 定义参数的默认值 / 指定 props 的默认值：
UserInfo.defaultProps = {
    desc: '不是晓雪',
}

export default UserInfo;