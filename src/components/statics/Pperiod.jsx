import React, { Component } from 'react'

import imgURL from '../../image/life-cycle.png'
export default class Pperiod extends Component {
    render() {
        return (
            <div className="Statics_box">
                <h2>生命周期</h2>
                <hr />
                <div className="Statics_box_gray">
                    <h3>什么是生命周期</h3>
                    <ul>
                        <li> 生命周期是指组件在被创建到销毁之间的过程</li>
                    </ul>
                </div>
                <div className="Statics_box_gray">
                    <h3>React 的组件的生命周期可分成三个状态</h3>
                    <ul>
                        <li> Mounting：已插入真实 DOM</li>
                        <li> Updating：正在被重新渲染</li>
                        <li> Unmounting：已移出真实 DOM</li>
                    </ul>
                </div>
                <div className="Statics_box_gray">
                    <h3>生命周期的方法有：</h3>
                    <ol>
                        <li>componentWillMount 在渲染前调用,在客户端也在服务端。</li>
                        <li>componentDidMount : 在第一次渲染后调用，只在客户端。</li>
                        <li>componentWillReceiveProps 在组件接收到一个新的 prop (更新后)被调用。</li>
                        <li>shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。</li>
                        <li>componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。</li>
                        <li>componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。</li>
                        <li>componentWillUnmount在组件从 DOM 中移除之前立刻被调用。</li>
                    </ol>
                </div>
                <img alt="这是生命周期" width="100%" src={imgURL} />
            </div>
        )
    }
}
