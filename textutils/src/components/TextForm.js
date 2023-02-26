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

    const LowerCaseOnClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    }
    return (
        <>
            <div>
                <div className="container">
                    <h1>{prop.heading}</h1>
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="container my-2">
                <button className="btn btn-primary" onClick={upperCaseOnClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={LowerCaseOnClick}>Convert to Lowercase</button>
                </div>
                <div className="container">
                    <h1>Your text summary</h1>
                    <p>Characters: {text.length}</p>
                    <p>Words: {text.split(" ").length}</p>
                    <p>This can be read in: {0.008 * text.split(" ").length} minutes</p>
                </div>
            </div>
        </>
    )
}
