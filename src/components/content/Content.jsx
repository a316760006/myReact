import React, { Component } from "react"
import Center from "./Center"
import "./Content.scss"
export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content-top flex flex-bw">
                    <div>
                        <i className="fa fa-angle-double-left top-p"></i>
                        <i className="fa fa-home top-p">
                            <span> 主页</span>
                        </i>
                    </div>
                    <div className="top-right">
                        <i className="fa fa-angle-double-right top-p border"></i>
                        <i className="fa fa-angle-down top-p border"></i>
                    </div>
                </div>
                <Center />
                <div className="content-bottom">
                    2017 © kit.zhengjinfan.cn MIT license
                </div>
            </div>
        )
    }
}