import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const upperCaseOnClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Sucess", "Converted to Upper Case");
    }

    const lowerCaseOnClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Sucess", "Converted to Lower Case");
    }

    const clearTextOnClick = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert("Sucess", "Text Cleared");
    }

    const copyTextOnClick = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Sucess", "Copied to Clipboard");
    }
    return (
        <>
            <div>
                <div className="container">
                    <h1 className={`text-${props.mode == 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode == 'dark' ? '#2b3035' : 'white', color: props.mode == 'dark' ? 'white' : 'black', border: props.mode == 'dark' ? '3px solid white' : '3px solid black' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="container my-2">
                    <button className="btn btn-primary" onClick={upperCaseOnClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={lowerCaseOnClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary" onClick={clearTextOnClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1" onClick={copyTextOnClick}>Copy Text</button>
                </div>
                <div className={`container text-${props.mode == 'light' ? 'dark' : 'light'}`}>
                    <h3>Your text summary</h3>
                    <p>Characters: {text.length}</p>
                    <p>Words: {text.split(" ").length}</p>
                    <p>This can be read in: {0.008 * text.split(" ").length} minutes</p>
                </div>
            </div>
        </>
    )
}