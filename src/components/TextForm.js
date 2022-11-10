import React, {useState} from 'react'

//text is state variable here, and its value is set to "Enter text here", we will change its value by using setText function
//const [text, setText] = useState('Enter text here');
//text.split(" ") makes an array

export default function TextForm(props) {

    const handleUpClick = () =>{
    //    console.log("Uppercase was clicked"+ text); 
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to upper case", "success")
    }

    const handleLoClick = () =>{ 
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lower case", "success")
      }

    const handleClearClick = () =>{ 
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared", "success")
     }

    const handleCopy = () =>{
      let copytext = document.getElementById("myBox");
      copytext.select();
      navigator.clipboard.writeText(copytext.value);
      props.showAlert("Text copied to clipboard", "success")
    } 

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On change"); 
        setText(event.target.value);
     }

  const [text, setText] = useState("");
//   text = "new text"; //Incorrect way to change the state
//   setText("New text"); //Correct way to change the state

return (
  <>
  <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" onChange={handleOnChange} rows="8" placeholder='Type here'></textarea>
    </div>
    <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercases</button>
    <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowerrcases</button>
    <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary m-2" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
  </div>

  <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to preview"}</p>
  </div>
  </>
  )
}