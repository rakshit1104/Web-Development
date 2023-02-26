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
    return (
        <div>
            <div className="mb-3">
                <h1>{prop.heading}</h1>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperCaseOnClick}>Convert to Uppercase</button>
        </div>
    )
}
