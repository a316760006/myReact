import React, { Component } from "react"
import MyContext from "./MyContext.js"
export default class Child extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    obj => {
                        return <div style={{ float: "left", background: obj.c, margin: "20px", width: "50px", height: "50px" }}>
                            <span style={{ color: obj.bg }}>123</span>
                        </div>
                    }
                }
            </MyContext.Consumer>
        )
    }
}