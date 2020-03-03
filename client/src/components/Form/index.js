import React from "react";
import "./style.css"

export function Input(props) {
    return (
        <div>
            <input {...props}></input>
        </div>
    )
}
export function Submit(props) {
    return (
        <button {...props}>Submit</button>
    )
}