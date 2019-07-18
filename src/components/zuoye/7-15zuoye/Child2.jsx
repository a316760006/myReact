import React, { Component } from 'react'

export default class Child2 extends Component {
    render() {
        let { box2 } = this.props
        return (
            <div style={{ width: "40%", height: "100%", textAlign: "center", float: "right" }}>
                <div style={{ border: "2px solid green", background: "greenyellow" }} onClick={() => this.props.onClick("box2")}>改变右边背景颜色</div>
                <div style={{ height: "80%", border: "2px solid #5C4676", background: `#${box2}`, padding: "15px", marginTop: "20px" }}>
                    静静等着被操作
                </div>
            </div>
        )
    }
}
