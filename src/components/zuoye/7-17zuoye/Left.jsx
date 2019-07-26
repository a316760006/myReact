import React, { Component } from "react"
import MyContext from "./MyContext.js"
import LeftChild from "./LeftChild"
export default class Child extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    obj => {
                        return <div style={{ float: "left", height: "260px", width: "200px", margin: "20px", background: obj.cbg }}>
                            <LeftChild />
                            <LeftChild />
                            <LeftChild />
                            <LeftChild />
                            <LeftChild />
                        </div>
                    }
                }
            </MyContext.Consumer>
        )
    }
}