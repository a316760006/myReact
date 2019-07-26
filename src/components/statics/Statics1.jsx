import React, { Component } from 'react'
import "./Statics.scss"
export default class Statics1 extends Component {
    render() {
        let left = `{`
        let right = `}`
        let box = `<div>`
        let box1 = `</div>`
        return (
            <div className="Statics_box">
                <h2>Class组件/容器组件</h2>
                <hr />
                <div className="Statics_box_gray">
                    <ul>
                        <li> 特点: 功能强大,逻辑方法,生命周期,状态state都在class组件里</li>
                        <li> 缺点: 渲染对比无状态组件较慢</li>
                        <li> 特性: 会被实例化</li>
                    </ul>
                </div>
                <div className="Statics_box_gray">
                    <h3>写法: </h3>
                    <pre>  <span style={{ color: "#AF00DB" }}>import </span>
                        <span style={{ color: "#001080" }}>React </span>
                        <span style={{ color: "#AF00DB" }}>from </span>
                        <span style={{ color: "#A31515" }}>"react"</span>
                    </pre>
                    <pre>  <span style={{ color: "#0000FF" }}>class </span>
                        <span style={{ color: "#267F99" }}>FileName </span>
                        <span style={{ color: "#0000FF" }}>extends </span>
                        <span style={{ color: "#267F99" }}>React.Componrnt</span>(){left}
                    </pre>
                    <pre>      <span style={{ color: "#0000FF" }}>constructor</span>(){left}</pre>
                    <pre>          <span style={{ color: "#0000FF" }}>super</span>()</pre>
                    <pre>      {right}</pre>
                    <pre>      <span style={{ color: "#BE8126" }}>render</span>(){left}</pre>
                    <pre>          <span style={{ color: "#AF00DB" }}>return</span>(</pre>
                    <pre>              <span style={{ color: "#A31515" }}>{box}</span></pre>
                    <pre>              这是组件里的内容</pre>
                    <pre>              <span style={{ color: "#A31515" }}>{box1}</span></pre>
                    <pre>          )</pre>
                    <pre>      {right}</pre>
                    <pre>  {right}</pre>
                    <pre>  <span style={{ color: "#AF00DB" }}>export </span>
                        <span style={{ color: "#AF00DB" }}>default </span>
                        <span style={{ color: "#267F99" }}>FileName</span>
                    </pre>
                </div>
            </div>
        )
    }
}