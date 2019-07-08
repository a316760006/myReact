import React from "react"
function Child(props) {
    var render = (props) => {
        if (props.type) {
            return <props.type className={props.name}>{props.text}</props.type>
        }
        return <div className={props.name}>{props.text}</div>
    }
    return (
        render(props)
    )
}
export default Child