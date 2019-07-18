import React, { Component } from "react"
import MyContext from "./MyContext.js"
import "./style.scss"
export default class Header extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {obj => {
                    return <div style={{ width: "80%", margin: "auto", background: "#9BBB59", padding: "20px" }}>
                        <span>主题按钮:</span>
                        <button className="July17_btn" onClick={() => obj.onSwitch("red")} style={{ background: "red" }} >玫瑰红</button>
                        <button className="July17_btn" onClick={() => obj.onSwitch("blue")} style={{ background: "blue" }} >宝石蓝</button>
                        <button className="July17_btn" onClick={() => obj.onSwitch("yellow")} style={{ background: "yellow" }} >雏菊黄</button>
                        <button className="July17_btn" onClick={() => obj.onSwitch("white")} style={{ background: "white" }} >天使白</button>
                        <button className="July17_btn" onClick={() => obj.onSwitch("purple")} style={{ background: "purple" }} >浪漫紫</button>
                    </div>
                }
                }
            </MyContext.Consumer>
        )
    }
}