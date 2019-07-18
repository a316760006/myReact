import React, { Component } from "react"
import "./Html.scss"
import Center from "../content/Center"
import Zuoye17July from "../zuoye/7-17zuoye/Home"
import Zuoye15July from "../zuoye/7-15zuoye/Html"
import Zuoye12July from "../zuoye/7-12zuoye/7-12"
import Zuoye11July from "../zuoye/7-11zuoye/Home"
import Statics from "../statics/Statics"
import Statics1 from "../statics/Statics1"
import Props from "../statics/Props"
import Pperiod from "../statics/Pperiod"
// import Zuoye10July from "../zuoye/7-10zuoye/Home"
export default class Html extends Component {
    constructor() {
        super()
        this.state = {
            direction: true,
            isLi1: false,
            isLi2: false,
            isLi3: false,
            content: "",
            zuoye: ["7-11", "7-12", "7-15", "7-17"]
        }
    }
    onClickDirection = () => {
        this.setState({
            direction: !this.state.direction
        })
    }
    onClickLi1 = () => {
        this.setState({
            isLi1: !this.state.isLi1,
            isLi2: false,
            isLi3: false
        })
    }
    onClickLi2 = () => {
        this.setState({
            isLi1: false,
            isLi2: !this.state.isLi2,
            isLi3: false
        })
    }
    onClickLi3 = () => {
        this.setState({
            isLi1: false,
            isLi2: false,
            isLi3: !this.state.isLi3
        })
    }
    onClickTwoli(num) {
        this.setState({
            content: num
        })
    }
    render() {
        let { direction, isLi1, isLi2, isLi3, content } = this.state
        let dom = "";
        switch (content) {
            case "首页":
                dom = <Center />;
                break;
            case "静态组件":
                dom = <Statics />;
                break;
            case "容器组件":
                dom = <Statics1 />;
                break;
            case "props":
                dom = <Props />;
                break;
            case "Pperiod":
                dom = <Pperiod />;
                break;
            case "7-17":
                dom = <Zuoye17July />
                break;
            case "7-15":
                dom = <Zuoye15July />;
                break;
            case "7-12":
                dom = <Zuoye12July />;
                break;
            case "7-11":
                dom = <Zuoye11July />;
                break;
            default:
                dom = <Zuoye17July />;
                break;
        }
        return (
            <React.Fragment>
                <div className="Nav flex flex-bw">
                    <div className="flex flex-bw">
                        <div className="Nav-left" onClick={this.onClickDirection}>
                            <i className={direction ? "fa fa-angle-double-left" : "fa fa-angle-double-right"}></i>
                        </div>
                        <div className="Nav-left">React后台</div>
                    </div>
                    <div className="Nav-right flex flex-bw">
                        <div className="img"></div>
                        <div className="name">Hui<i className="fa fa-angle-down"></i></div>
                    </div>
                </div>
                <div className="flex flex-bw subject">
                    <div className={direction ? "subject_left" : "subject_left1"}>
                        <ul className="subject_leftul">
                            <li onClick={() => this.onClickTwoli("首页")}><i className="fa fa-navicon">&nbsp;&nbsp;</i><span>首页</span></li>
                            <li onClick={this.onClickLi1}>
                                <i className="fa fa-navicon">&nbsp;&nbsp;</i>
                                <span>组件</span>
                                <i className={isLi1 ? "fa fa-angle-up right" : "fa fa-angle-down right"}></i>
                            </li>
                            {
                                isLi1 && <ul className="Two_leftulul">
                                    <li onClick={() => this.onClickTwoli("静态组件")}><i className="fa fa-file-text-o">&nbsp;&nbsp;</i>
                                        <span>静态组件/ui组件</span></li>
                                    <li onClick={() => this.onClickTwoli("容器组件")}><i className="fa fa-file-text-o">&nbsp;&nbsp;</i>
                                        <span>class组件/容器组件</span></li>
                                </ul>
                            }
                            <li onClick={this.onClickLi2}>
                                <i className="fa fa-navicon">&nbsp;&nbsp;</i>
                                <span>API文档</span>
                                <i className={isLi2 ? "fa fa-angle-up right" : "fa fa-angle-down right"}></i>
                            </li>
                            {
                                isLi2 && <ul className="Two_leftulul">
                                    <li onClick={() => this.onClickTwoli("props")}><i className="fa fa-file-text-o">&nbsp;&nbsp;</i>
                                        <span>小结</span></li>
                                    <li onClick={() => this.onClickTwoli("Pperiod")}><i className="fa fa-file-text-o">&nbsp;&nbsp;</i>
                                        <span>生命周期</span></li>
                                </ul>
                            }
                            <li onClick={this.onClickLi3}>
                                <i className="fa fa-navicon">&nbsp;&nbsp;</i>
                                <span>作业</span>
                                <i className={isLi3 ? "fa fa-angle-up right" : "fa fa-angle-down right"}></i>
                            </li>
                            {
                                isLi3 && <ul className="Two_leftulul">
                                    {
                                        this.state.zuoye.map((item, index) => {
                                            return <li key={index} onClick={() => this.onClickTwoli(`${item}`)}><i className="fa fa-file-text-o">&nbsp;&nbsp;</i>
                                                <span>{item}</span></li>
                                        })
                                    }

                                </ul>
                            }
                        </ul>
                    </div>
                    <div className={direction ? "subject_right" : "subject_right1"}>
                        <div className="content">
                            <div className={direction ? "content-top flex flex-bw" : "content-top1 flex flex-bw"}>
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
                            <div style={{ height: "50px" }}></div>
                            {dom}
                            <div className="content-bottom">2017 © kit.zhengjinfan.cn MIT license</div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}