import React, { Component } from 'react'
import Child1 from "./Child1"
import Child2 from "./Child2"
export default class Html extends Component {
    constructor() {
        super()
        console.log(11)
        this.state = {
            box2: "8164A3",
            box1: "8164A3",
            boxOne: "87CEEB",
            boxTwo: ""
        }
    }
    handleClick = (e) => {
        var result = '';
        for (var i = 0; i < 6; i++) {
            result += Math.floor(Math.random() * 16).toString(16);//获取0-15并通过toString转16进制
        }
        if (e === "box2") {
            this.setState({
                box2: result
            })
        } else if (e === "box1") {
            this.setState({
                box1: result
            })
        } else if (e === "boxOne") {
            this.setState({
                boxOne: result
            })
        } else if (e === "boxTwo") {
            this.setState({
                boxTwo: result
            })
        }
    }
    render() {
        let { box2, box1, boxOne, boxTwo } = this.state
        return (
            <div style={{ width: "50%", height: "400px", margin: "auto", background: `#${boxOne}`, border: "2px solid blue", padding: "15px" }}>
                <Child1 onClick={this.handleClick}
                    box1={box1}
                    boxOne={boxOne}
                    boxTwo={boxTwo} />
                <Child2 onClick={this.handleClick} box2={box2} />
            </div>
        )
    }
}
