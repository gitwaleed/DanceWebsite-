import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    //text('new Text'); //wrong way to change the state
    // setText('new Text'); //correct way to change the state
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase!','success');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase!','success');
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleCopy =() => {
        var content = document.getElementById('myBox');
        content.select();
        document.execCommand('copy');
    }
    return(
        <>
    <div className='container my-3' style={{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode==='light'?'black':'white'}} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container" style = {{color : props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.08 * text.split(' ').length}Minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to above textbox to preview here'}</p>
    </div>
    </>
    )
}
