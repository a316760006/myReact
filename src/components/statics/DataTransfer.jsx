import React, { Component } from 'react'

export default class DataTransfer extends Component {
    render() {
        return (
            <div className="Statics_box">
                <h2>上下文数据传递</h2>
                <hr />
                <div className="Statics_box_gray">
                    <h3>什么是上下文数据传递</h3>
                    <ul>
                        <li> 有的时候,我们的dom层级很多,但是数据是一级一级从父级向下传递 props 得到的,就需要我们每个组件都要写 props</li>
                        <li> 但是这样写的好处是: 直观,好查找;<br />坏处是: 耦合高,不利于维护,中间有一层忘写 props 就会导致下面的层级丢失数据</li>
                        <li> 所以, Context 提供了一个无需为每层组件手动添加 props ,就能在组件树间进行数据传递的方法</li>
                        <li> 官方:在一个典型的 React 应用中,数据是通过 props 属性自上而下(由父及子)进行传递的,但这种做法对于某些类型的属性而言是极其繁琐的(例如:地区偏好,UI主题),这些属性是应用程序中许多组件都需要的。 Context 提供了一种在组件之间共享此类值的方式,而不必显式地通过组件树的逐层传递 props</li>
                    </ul>
                </div>
                <div className="Statics_box_gray">
                    <h3>需要记住的API</h3>
                    <ul>
                        <li> React.createContext: 创建上下文对象</li>
                        <li> Context.Provider: 上下文数据提供者组件</li>
                        <li> Context.Consumer: 上下文组件渲染组件</li>
                        <li> Class.contextType: 订阅者</li>
                    </ul>
                </div>
            </div>
        )
    }
}
