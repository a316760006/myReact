import React, { Component } from "react"
import "./LeftBox.scss"
import 'antd/dist/antd.css'
import { Menu, Dropdown, Icon } from 'antd'
export default class LeftBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const menu = (
            <Menu className="list-down">
                <Menu.Item key="0">
                    <a href="#">静态组件/ui组件</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="#">class组件/容器组件</a>
                </Menu.Item>
            </Menu>
        );
        const menu1 = (
            <Menu className="list-down">
                <Menu.Item key="0">
                    <a href="#">React.Component</a>
                </Menu.Item>
            </Menu>
        );


        return (
            <div className="leftbox">
                <Menu></Menu>
                <ul>
                    <li className="leftbox-list">
                        <i className="fa fa-navicon"> 首页</i>
                    </li>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <li className="leftbox-list">
                            <i className="fa fa-navicon"> 组件</i>
                            <i className="fa fa-angle-down fa-lg right"></i>
                        </li>
                    </Dropdown>
                    <Dropdown overlay={menu1} trigger={["click"]}>
                        <li className="leftbox-list">
                            <i className="fa fa-navicon"> Api文档</i>
                            <i className="fa fa-angle-down fa-lg right"></i>
                        </li>
                    </Dropdown>
                </ul>
            </div>
        );
    }
}