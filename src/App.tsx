import * as React from "react"

function App(){

    return(
        <div>
            <input type="input" name="inputOne" value="" />
            <input type="input" name="inputTwo" value="" />            
        <div>
            <button type="button" className="button">/</button>
            <button type="button" className="button">*</button>
            <button type="button" className="button">-</button>
            <button type="button" className="button">+</button>
        </div>
            <span id="answer"></span>
        </div>
    )
}

export default App