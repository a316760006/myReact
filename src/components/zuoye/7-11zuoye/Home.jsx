import React, { Component } from 'react'
import rule from "./rule.js"
import "./Home.scss"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            passWord: "",
            passWordEnd: "",
            tesTing: "",
            isShow: 1,
            Checked: false,
            isShow1: false
        }
    }
    // 这个是用来实现input框里面数据绑定的
    onhandleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    // 这个是复选框的点击事件,每次点击,变量都会绑定复选框现在的状态
    handleCheck = () => {
        let checkbox = document.getElementById("checkbox");
        this.setState({
            Checked: checkbox.checked
        })
    }
    // 这个是登陆按钮的事件
    onhandleSubmit(pandName) {
        let data = rule(this.state, pandName)
        // 每次输入,变量都会+1,超过2,验证码框就会出来
        this.setState({
            isShow: this.state.isShow + 1,
        })
        // 成功登陆的话,变量初始化
        if (data.status) {
            alert(data.msg)
            this.setState({
                isShow: 1,
                isShow1: !this.state.isShow1,
                Checked: false
            })
        } else {
            alert(data.msg)
        }
    }
    // 把登录页面隐藏掉
    handleClick = () => {
        this.setState({
            isShow1: !this.state.isShow1
        })
    }
    // 要是复选框没选中,就会触发这个事件
    onhandleSubmit1 = () => {
        alert("可否把那个小框框给勾上呢,亲? 嘤嘤嘤=￣ω￣=")
    }
    // 注册按钮
    render() {
        let { userName, passWord, tesTing, passWordEnd } = this.state
        return (
            <div className="box">
                {
                    this.state.isShow1 && <form>
                        <label className="from-label">
                            <div>用户名: </div>
                            <input className="inp text" type="text" name="userName" value={userName} onChange={this.onhandleChange} />
                        </label>
                        <label className="from-label">
                            <div>密码: </div>
                            <input className="inp text" type="password" name="passWord" value={passWord} onChange={this.onhandleChange} />
                        </label>
                        <label className="from-label">
                            <div>确认密码: </div>
                            <input className="inp text" type="password" name="passWordEnd" value={passWordEnd} onChange={this.onhandleChange} />
                        </label>
                        <label className="from-label">
                            <input className="login inp" type="button" value="注册" onClick={() => this.onhandleSubmit("login3")} />
                        </label>
                    </form>
                }
                {
                    !this.state.isShow1 && <form>
                        <label className="from-label">
                            <div>用户名: </div>
                            <input className="inp text" type="text" name="userName" value={userName} onChange={this.onhandleChange} />
                        </label>
                        <label className="from-label">
                            <div>密码: </div>
                            <input className="inp text" type="password" name="passWord" value={passWord} onChange={this.onhandleChange} />
                        </label>
                        {
                            this.state.isShow > 2 && <label className="from-label">
                                <div>验证码: </div>
                                <input className="inp text" type="text" name="tesTing" value={tesTing} onChange={this.onhandleChange} />
                            </label>
                        }
                        <label className="from-label">
                            <input id="checkbox" type="checkbox" onClick={this.handleCheck} />
                            <span>Remember me</span>
                            <input className="register" type="button" value="注册" onClick={this.handleClick} />
                        </label>
                        <label className="from-label">
                            <input className="login inp" type="button" value="Login" onClick={this.state.Checked ? this.state.isShow > 2 ? () => this.onhandleSubmit("login1") : () => this.onhandleSubmit("login2") : this.onhandleSubmit1} />
                        </label>
                    </form>
                }

            </div>
        )
    }
}