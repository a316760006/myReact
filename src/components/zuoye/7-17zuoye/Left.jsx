import React, { Component } from "react"
import MyContext from "./MyContext.js"
import Left_child from "./Left_child"
export default class Child extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    obj => {
                        return <div style={{ float: "left", height: "260px", width: "200px", margin: "20px", background: obj.cbg }}>
                            <Left_child />
                            <Left_child />
                            <Left_child />
                            <Left_child />
                            <Left_child />
                        </div>
                    }
                }
            </MyContext.Consumer>
        )
    }
}