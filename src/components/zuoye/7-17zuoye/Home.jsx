import React, { Component } from 'react'
import MyContext from "./MyContext.js"
import Header from "./Header.jsx"
import Child from "./Child.jsx"
// 主题数据

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            link: ""
        }
    }
    onSwitch = (link) => {
        this.setState({
            link
        })
    }
    render() {
        const zhuti = {
            red: { bg: "red", c: "black", cbg: "pink" },
            blue: { bg: "blue", c: "white", cbg: "skyblue" },
            yellow: { bg: "yellow", c: "black", cbg: "yellowgreen" },
            white: { bg: "white", c: "black", cbg: "gray" },
            purple: { bg: "purple", c: "white", cbg: "palevioletred" }
        }
        return (
            <div style={{ background: 'skyblue', margin: 'auto', padding: "15px", width: "80%", height: "80%" }}>
                <div style={{ margin: "auto", width: "90%", height: "80%" }}>
                    <MyContext.Provider value={{ ...zhuti[this.state.link], onSwitch: this.onSwitch }}>
                        <Header />
                        <Child />
                    </MyContext.Provider>
                </div>
            </div >
        )
    }
}
