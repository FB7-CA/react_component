import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector("#root"))
