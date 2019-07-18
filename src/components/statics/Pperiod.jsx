import React, { Component } from 'react'

export default class Pperiod extends Component {
    render() {
        return (
            <div className="Statics_box">
                <h2>生命周期</h2>
                <hr />
                <div className="Statics_box_gray">
                    <h3>什么是生命周期</h3>
                    <pre>  - 生命周期是指组件在被创建到销毁之间的过程</pre>
                </div>
                <div className="Statics_box_gray">
                    <h3>React 的组件的生命周期可分成三个状态</h3>
                    <pre>  - Mounting：已插入真实 DOM</pre>
                    <pre>  - Updating：正在被重新渲染</pre>
                    <pre>  - Unmounting：已移出真实 DOM</pre>
                </div>
                <div className="Statics_box_gray">
                    <h3>生命周期的方法有：</h3>
                    <pre>  1. componentWillMount 在渲染前调用,在客户端也在服务端。</pre>
                    <pre>  2. componentDidMount : 在第一次渲染后调用，只在客户端。</pre>
                    <pre>  3. componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。</pre>
                    <pre>  4. shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。</pre>
                    <pre>  5. componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。</pre>
                    <pre>  6. componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。</pre>
                    <pre>  7. componentWillUnmount在组件从 DOM 中移除之前立刻被调用。</pre>
                </div>
                <div className="Statics_box_gray">
                    <h3>生命周期的方法有：</h3>
                    <pre>  1. componentWillMount 在渲染前调用,在客户端也在服务端。</pre>
                    <pre>  2. componentDidMount : 在第一次渲染后调用，只在客户端。</pre>
                    <pre>  3. componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。</pre>
                    <pre>  4. shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。</pre>
                    <pre>  5. componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。</pre>
                    <pre>  6. componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。</pre>
                    <pre>  7. componentWillUnmount在组件从 DOM 中移除之前立刻被调用。</pre>
                </div>
                <img alt="这是生命周期" width="100%" src="https://images2018.cnblogs.com/blog/296430/201807/296430-20180724111823156-360464356.png" />
            </div>
        )
    }
}
