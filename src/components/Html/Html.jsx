import React, { Component } from "react"
import NavTwo from "../NavTwo/NavTwo"
import LeftBox from "../LeftBox/LeftBox"
import Content from "../content/Content"
class Html extends Component {
    render() {
        return (
            <div className="html">
                <NavTwo key="1" />
                <div className="flex flex-bw box">
                    <LeftBox key="2" />
                    <Content key="3" />
                </div>
            </div>
        )
    }
}
export default Html