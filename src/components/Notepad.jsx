import React, { useRef } from 'react'

function Notepad() {
    const inpUser = useRef();
    const opUser = useRef();

    let upperCase = () =>{
        let text = inpUser.current.value;
        let upperInp= text.toUpperCase();
        opUser.current.value = upperInp
    }

    let lowerCase = () =>{
        let lower = inpUser.current.value;
        let lowerInp = lower.toLowerCase();
        opUser.current.value = lowerInp
    }

    let Convertcapital = () =>{
        let inp = inpUser.current.value;
        const words = inp.split(" ");
    
        let capitalizedString = words.map((word) => {
            return word[0].toUpperCase() + word.subString(1);
          }).join(" ");
      
          opUser.current.value = capitalizedString;
    }

    const copyText = () =>{
        let opText = opUser.current.value;
        navigator.clipboard.writeText(opText);
        alert("Text Copied")
    }

    const removeSpace = () =>{
        let text = inpUser.current.value;
        let RemovedSpace = text.split(" ").join("");
        opUser.current.value = RemovedSpace
    }

    let myStyle = {
        height:"100%",
        width:"100vw",
        backgroundColor: "purple",
    }
  
  return (
    <section style={myStyle}>
    <div className='container'>
     <h3 className='text-center'>Advance Notepad</h3>
     <textarea name="userInp" id="userInp" cols="30" rows="10" className='w-100 bg-light ' ref={inpUser}></textarea>
     <div className='w-100 d-flex justify-content-center my-3'>
        <button className="btn btn-dark mx-2 px-3" onClick={upperCase}>UpperCase</button>
        <button className="btn btn-dark mx-2 px-3" onClick={lowerCase}>LowerCase</button>
        <button className="btn btn-dark mx-2 px-3" onClick={Convertcapital}>Capitalize</button>
        <button className="btn btn-dark mx-2 px-3" onClick={removeSpace}>Remove Space</button>
     </div>

     <textarea name="userInp" id="userInp"  rows="10" className='w-100' ref={opUser} readOnly ></textarea>
     <button className='btn btn-dark mx-2 px-3' onClick={copyText}>Copy Text</button>
    </div>
    </section>
  )
}

export default Notepad
