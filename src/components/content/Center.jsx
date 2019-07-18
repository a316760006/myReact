import React, { Component } from "react"
import "./Content.scss"
export default class Center extends Component {
    render() {
        return (
            <div className="center">
                <div className="center-body flex">
                    <div><a href="https://react.docschina.org/" rel="noopener noreferr">React官网</a></div>
                    <div><a href="https://note.youdao.com/ynoteshare1/index.html?id=c9af79f9dc6e3f3203ad3da7180b9a9a&type=note" rel="noopener noreferr">宋老师的PPT链接</a></div>
                    <div><a href="https://www.baidu.com/" rel="noopener noreferr">今日所学</a></div>
                    <div><a href="https://www.baidu.com/" rel="noopener noreferr">学习计划</a></div>
                </div>
                <div className="center-body1 marpad">
                    <p>笔记摘要</p>
                    <div className="body1-div">
                        <span>xxxxxxxxxxxxxxxxxx</span>
                        <span>脚手架:</span>
                        <span>演示代码</span>
                    </div>
                </div>
                <div className="center-body1 marpad">
                    <p>版本信息</p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>版本号</td>
                                <td>v2.0.0-beta1</td>
                            </tr>
                            <tr>
                                <td>依赖</td>
                                <td>layui v2.2.5</td>
                            </tr>
                            <tr>
                                <td>作者</td>
                                <td>Van Zheng</td>
                            </tr>
                            <tr>
                                <td>邮箱</td>
                                <td>zheng_jinfan@126.com</td>
                            </tr>
                            <tr>
                                <td>交流群</td>
                                <td>248049395</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="center-body1 marpad">
                    <p>关于React</p>
                    <div className="body1-div">
                        <h3>React起源</h3>
                        <span style={{ marginLeft: "20px" }}>React 起源于 Facebook 的内部项目,因为该公司对市场上所有 JavaScript MVC 框架,都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</span>
                        <h3>React的三种写法</h3>
                        <pre>  - function 无状态组件,只接受一个props</pre>
                        <pre>  - class es6的写法,继承React.Component</pre>
                        <pre>  - createClass 了解就好,最后一个版本是15.5.0新版里被废弃</pre>
                        <h3>React的特点</h3>
                        <pre>  - 简单</pre>
                        <pre>  - 声明式</pre>
                        <div style={{ background: "#F5F5F5", borderRadius: "5px", border: "1px solid #ccc" }}>
                            <pre>  1.React的核心是组件,组件的设计目的是提高代码复用率、降低测试难度和代码复杂度。</pre>
                            <pre>  2.提高代码复用率: 组件将数据和逻辑封装,类似面向对象中的类。</pre>
                            <pre>  3.降低测试难度: 组件高内聚低耦合,很容易对单个组件进行测试。</pre>
                            <pre>  4.降低代码复杂度: 直观的语法可以极大提高可读性。</pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}