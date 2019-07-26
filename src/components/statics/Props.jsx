import React from "react"
export default function Props() {
    let code = `<MyCom><Child /></MyCom>`
    return (
        <div className="Statics_box">
            <h2>总结:</h2>
            <hr />
            <div className="Statics_box_gray">
                <h3>props属性:</h3>
                <ul>
                    <li> 定义: 是由父组件传递给子组件的数据</li>
                    <li> 特性: 子组件不能修改 props , props 在子组件中是只读的</li>
                    <li> Props 更新后会使子组件发生更新</li>
                    <li> 子组件更新 props 需要调用父组件的方法,同样也是 props 传递进来的方法</li>
                </ul>
            </div>
            <div className="Statics_box_gray">
                <h3>State 状态:</h3>
                <ul>
                    <li> 定义: state 是组件自身的状态数据,可以自己修改</li>
                    <li> 特点: state 改变后会使组件更新</li>
                    <li> 修改 state 的方法是: this.setState()</li>
                </ul>
            </div>
            <div className="Statics_box_gray">
                <h3>JSX:</h3>
                <ul>
                    <li> JSX是React.createElement()的语法糖</li>
                    <li> 允许我们在js中写html标签，最终解析的时候会被编译成React.createElement()</li>
                </ul>
            </div>
            <div className="Statics_box_gray">
                <h3>组件的组合模式:</h3>
                <ul>
                    <li> 插入的形式:{code}</li>
                    <li> 直接将组件引入到父组件中使用</li>
                    <li> 将组件用props传递给子组件</li>
                    <li> 高阶组件（HOC）：将一个组件作为参数传递给一个方法，该方法返回一个新组件。</li>
                    <li> 注意：在开发的时候，容器组件存放逻辑方法，render里就是ui组件。</li>
                </ul>
            </div>
        </div>
    )
}