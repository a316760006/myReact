import React, { Component } from "react"
import Child from "../child/Child"
import "./NavTwo.scss"
class NavTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "你的名字"
        }
    }
    render() {
        return (
            <div className="navTwo">
                <div className="navTwo-left flex">
                    <i className="fa fa-angle-double-left"></i>
                    <Child text="React后台" />
                </div>
                <div className="navtwo-right">
                    <img alt="" className="navtwo-right-img" src={`${process.env.PUBLIC_URL}/logo.svg`} />
                    <Child text={this.state.text} />
                    <i className="fa fa-angle-down"></i>
                </div>
            </div >
        )
    }
}
export default NavTwo