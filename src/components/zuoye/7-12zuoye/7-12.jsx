import React, { Component } from "react"
import "./7-12.scss"
export default class Zuoye12July extends Component {
    constructor() {
        super()
        this.state = {
            View: ["没有看法", "我觉得996应该尽早废弃", "互联网未来会成为主导世界的枢纽"],
            Like: [{
                Correct: false,
                val: "一天吃5次主食"
            }, {
                Correct: false,
                val: "不光吃5吃主食,还要喝8罐快乐水"
            }, {
                Correct: false,
                val: "不光5次主食,8罐快乐水,还要吃半斤零食"
            }, {
                Correct: false,
                val: "吃完上面的食物,打开朋友圈发一条减肥的口号"
            }, {
                Correct: false,
                val: "素食主义者"
            }, {
                Correct: false,
                val: "热爱运动"
            }, {
                Correct: false,
                val: "喜欢古典音乐"
            }, {
                Correct: false,
                val: "喜欢看书,偶尔也写点东西"
            }],
            area: ""
        }
    }
    handleClick = () => {
        const radio = document.getElementsByName("radio");
        const checkboxs = document.getElementsByName("checkbox");
        let a = []
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked === true) {
                console.log("单选: " + radio[i].defaultValue)
            }
        }
        for (let i = 0; i < checkboxs.length; i++) {
            if (checkboxs[i].checked === true) {
                a.push(checkboxs[i].defaultValue)
            }
        }
        console.log(a)
        console.log("问答: " + this.state.area)
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    render() {
        let { View, Like, area } = this.state
        return (
            <div className="July12">
                <form>
                    <label>
                        <ul>
                            <li>1.您对互联网的未来发展有什么看法?<span style={{ color: "blue" }}>【单选】</span></li>
                            {
                                View.map((item, index) => {
                                    return <li key={index}>
                                        <label>
                                            <input onChange={this.handleChange} value={item} name="radio" type="radio" />{item}
                                        </label>
                                    </li>
                                })
                            }
                        </ul>
                    </label>
                    <label>
                        <ul>
                            <li>2.您有那些爱好<span style={{ color: "blue" }}>【多选】</span></li>
                            {
                                Like.map((item, index) => {
                                    return <li key={index}>
                                        <label>
                                            <input onChange={this.handleChange} name="checkbox" type="checkbox" value={item.val} />{item.val}
                                        </label>
                                    </li>
                                })
                            }
                        </ul>
                    </label>
                    <label>
                        <p>3.你认为当代年轻人应该持有怎样的世界观、人生观、价值观?<span style={{ color: "blue" }}>【问答】</span></p>
                        <textarea name="area" onChange={this.handleChange} value={area}></textarea>
                    </label>
                    <label>
                        <input onClick={this.handleClick} type="button" className="July12_btn" value="提交" />
                    </label>
                </form>
            </div>
        )
    }
}