import React, { Component } from 'react'
import "./style.scss"
export default class Child1 extends Component {
    render() {
        let { box1, boxTwo } = this.props
        return (
            <div style={{ width: "40%", height: "100%", textAlign: "center", float: "left" }}>
                <div style={{ border: "2px solid green", background: "greenyellow" }} onClick={() => this.props.onClick("box1")}>改变左边背景颜色</div>
                <div style={{ height: "80%", border: "2px solid #5C4676", background: `#${box1}`, padding: "15px", marginTop: "20px" }}>
                    <div className="zuoye715_child" onClick={() => this.props.onClick("boxOne")}>改变主体背景颜色</div>
                    <div className="zuoye715_child" style={{ background: `#${boxTwo}` }} onClick={() => this.props.onClick("boxTwo")}>改变自己背景颜色</div>
                    <div className="zuoye715_child" onClick={() => this.props.onClick("box2")}>改变右边背景颜色</div>
                </div>
            </div>
        )
    }
}
