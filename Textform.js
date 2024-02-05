import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("Enter the text");
    const upper=()=>{
        console.log("button is clicked"+text);
        let newtext=text.toLocaleUpperCase();
        
        setText(newtext);
    }
    const handle=(event)=>{
        console.log("clicked handle")
        setText(event.target.value)
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handle} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary" onClick={upper}>Convert to uppercase</button>
            </div>
        </div>
    )
}
