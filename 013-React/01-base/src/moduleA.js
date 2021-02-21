// ES6模块化
// 1 定义并且导出
export const a = '1 定义并且导出';

// 2 先定义后导出
const b = '2 先定义后导出';
//需要导出对象
export { b };

// 3 引入时添加别名
const c = '3 引入时添加别名'
//需要导出对象 
export { c }

// 4 导出时添加别名
const e = '4 导出时添加别名'
//export可以使用as关键字将输出的变量重命名
export { e as f }

// 5 使用default关键字
/*
    一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
    正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
    export default导出的模块,import时变量名可以用随意合法的名称
*/
// 直接导出
// export default '使用default关键字 直接导出';

// 定义后导出
const aa = '5 使用default关键字 定义后导出';
export default aa;