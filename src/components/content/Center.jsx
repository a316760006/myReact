import React, { Component } from "react"
import "./Content.scss"
export default class Center extends Component {
    render() {
        return (
            <div className="center">
                <div className="center-body flex">
                    <div><a href="https://react.docschina.org/" target="_blank">React官网</a></div>
                    <div><a href="https://note.youdao.com/ynoteshare1/index.html?id=c9af79f9dc6e3f3203ad3da7180b9a9a&type=note" rel="noopener noreferr">宋老师的PPT链接</a></div>
                    <div><a href="#" rel="noopener noreferr">今日所学</a></div>
                    <div><a href="#" rel="noopener noreferr">学习计划</a></div>
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
                        <span>关于React</span>
                        <span>关于React</span>
                        <span>关于React</span>
                        <span>关于React</span>
                        <span>关于React</span>
                        <span>关于React</span>
                        <span>关于React</span>
                    </div>
                </div>
            </div>
        )
    }
}