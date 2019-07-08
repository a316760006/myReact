import React, { Component } from "react"
import "./LeftBox.scss"
import 'antd/dist/antd.css'
export default class LeftBox extends Component {
    constructor() {
        super()
        this.state = {
            myid: ""
        }
    }
    onchagemenu1() {
        this.setState({
            myid: "",
            myid: "1"
        })
    }
    onchagemenu2() {
        this.setState({
            myid: "",
            myid: "2"
        })
    }
    onchagemenu3() {
        this.setState({
            myid: "",
            myid: "3"
        })
    }
    render() {
        return (
            <ul className="leftbox">
                <li className={this.state.myid === "1" ? "leftbox-click" : "leftbox-list"} onClick={() => this.onchagemenu1()}>
                    <i className="fa fa-navicon"> 首页</i>
                </li>
                <li className={this.state.myid === "2" ? "leftbox-click" : "leftbox-list"} onClick={() => this.onchagemenu2()}>
                    <i className="fa fa-navicon"> 组件</i>
                    <i className={this.state.myid === "2" ? "fa fa-angle-up fa-lg right" : "fa fa-angle-down fa-lg right"}></i>
                </li>
                <li className={this.state.myid === "2" ? "leftbox-list show" : "leftbox-list none"} onClick={() => this.onchagemenu2()}>
                    <i className="fa fa-file-text-o list-1"> 静态组件/ui组件</i>
                </li>
                <li className={this.state.myid === "2" ? "leftbox-list show" : "leftbox-list none"} onClick={() => this.onchagemenu2()}>
                    <i className="fa fa-file-text-o list-1"> class组件/容器组件</i>
                </li>
                <li className={this.state.myid === "3" ? "leftbox-click" : "leftbox-list"} onClick={() => this.onchagemenu3()}>
                    <i className="fa fa-navicon"> API文档</i>
                    <i className={this.state.myid === "3" ? "fa fa-angle-up fa-lg right" : "fa fa-angle-down fa-lg right"}></i>
                </li>
                <li className={this.state.myid === "3" ? "leftbox-list show" : "leftbox-list none"} onClick={() => this.onchagemenu3()}>
                    <i className="fa fa-file-text-o list-1"> React.Component</i>
                </li>
            </ul >
        )
    }
}