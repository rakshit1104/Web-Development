import React, { useState } from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState("Enter text here");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const upperCaseOnClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }

    const lowerCaseOnClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    }

    const clearTextOnClick = () => {
        let clearText = "";
        setText(clearText);
    }
    return (
        <>
            <div>
                <div className="container">
                    <h1>{prop.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="container my-2">
                    <button className="btn btn-primary" onClick={upperCaseOnClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={lowerCaseOnClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary" onClick={clearTextOnClick}>Clear Text</button>
                </div>
                <div className="container">
                    <h3>Your text summary</h3>
                    <p>Characters: {text.length}</p>
                    <p>Words: {text.split(" ").length}</p>
                    <p>This can be read in: {0.008 * text.split(" ").length} minutes</p>
                </div>
            </div>
        </>
    )
}