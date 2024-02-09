import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("");
    const upper=()=>{
        console.log("button is clicked"+text);
        let newtext=text.toLocaleUpperCase();
        
        setText(newtext);
    }
    const handle=(event)=>{
        console.log("clicked handle")
        setText(event.target.value)
    }
    function lower(){
        let newtext=text.toLocaleLowerCase();
        
        setText(newtext);
    }
    function clear(){
        let newtext=''

        setText(newtext);
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
             <textarea className="form-control mx-1" onChange={handle} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={upper}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={lower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
            </div>
            <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} chracter</p>
            <p>{0.008*text.split(" ").length}Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>
        </div>
        </>
    )


}
