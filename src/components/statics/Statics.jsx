import React from "react"
import "./Statics.scss"
export default function Statics() {
    let left = `{`
    let right = `}`
    let box = `<div>`
    let box1 = `</div>`
    return (
        <div className="Statics_box">
            <h2>无状态组件/ui组件</h2>
            <hr />
            <div className="Statics_box_gray">
                <pre>  - 特点:加载快,渲染快</pre>
                <pre>  - 功能:存放 dom</pre>
                <pre>  - 特性:不需要实例化,没有this,只接受一个props</pre>
                <p>无状态函数式组件形式上表现为一个只带有一个render方法的组件类，通过函数形式或者ES6 arrow function的形式在创建，并且该组件是无state状态的</p>
            </div>
            <div className="Statics_box_gray">
                <h3>写法:</h3>
                <pre>  <span style={{ color: "#AF00DB" }}>import </span>
                    <span style={{ color: "#001080" }}>React </span>
                    <span style={{ color: "#AF00DB" }}>from </span>
                    <span style={{ color: "#A31515" }}>"react"</span>
                </pre>
                <pre>  <span style={{ color: "#0000FF" }}>function </span>
                    <span style={{ color: "#267F99" }}>FileName </span>(<span>props</span>){left}
                </pre>
                <pre>      <span style={{ color: "#AF00DB" }}>return</span>(</pre>
                <pre>          <span style={{ color: "#A31515" }}>{box}</span></pre>
                <pre>          这是组件里的内容</pre>
                <pre>          <span style={{ color: "#A31515" }}>{box1}</span></pre>
                <pre>      )</pre>
                <pre>  {right}</pre>
                <pre>  <span style={{ color: "#AF00DB" }}>export </span>
                    <span style={{ color: "#AF00DB" }}>default </span>
                    <span style={{ color: "#267F99" }}>FileName</span>
                </pre>
            </div>

        </div>
    )
}