import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForms(props) {

    const handleUpCase = ()=>{
        // console.log("OnClick was clicked" +text);
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handleLoCase = ()=>{
        // console.log("OnClick was clicked" +text);
        let newText = text.toLowerCase()
        setText(newText);
    }
    const handleClText = ()=>{
        // console.log("OnClick was clicked" +text);
        let newText = "";
        setText(newText);
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event)=>{
        // console.log("OnChange was clicked");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");
    return (
        <div>
            <div className="mb-3 container mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" onClick={handleUpCase} className="btn btn-primary mt-1">UpperCase</button>
                <button type="button" onClick={handleLoCase} className="btn btn-primary mx-2 mt-1">LowerCase</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary mx-2 mt-1">CopyText</button>
                <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-2 mt-1">Remove Extra Spaces</button>
                <button type="button" onClick={handleClText} className="btn btn-danger mx-2 mt-1">ClearText</button>
            </div> 
            <div className="container mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
            </div>
        </div>
    )
}

TextForms.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForms.defaultProps = {
    heading: "Set Heading Here"
}
