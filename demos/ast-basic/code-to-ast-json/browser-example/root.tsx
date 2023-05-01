import React from "react"
import ReactDOM from "react-dom/client"

const Demo = () => {
    return <h1>Hello</h1>
}

const elem = document.getElementById("root")
const root = ReactDOM.createRoot(elem)
root.render(<Demo />);
