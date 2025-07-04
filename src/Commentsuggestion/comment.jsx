import React, { useState } from 'react'

const comment = () => {
  const suggestions = ["Beautiful", "Wonderful", "Gorgeous", "Nice"]
  const[text, settext]= useState('')
  const[comment, setcomment]= useState('')
  const handlebutton=(e)=>{
   const textval = e.target.innerText;
   settext(textval)
   console.log(textval)
  }
 
  const handlesubmit=()=>{
setcomment(text)
  }
  return (
    <div className=' flex flex-col justify-center h-[100vh] items-center'>
      <div className='bg-amber-200 h-[60vh] w-[30vw] flex flex-col items-center'>
        <div  className='mt-10 '>
    {suggestions.map((item)=>(
      <button className='border p-2 m-5 bg-white hover:bg-amber-100'  onClick={handlebutton} >{item}</button>
    ))}
       {/* <button className='border p-2 m-5 bg-white hover:bg-amber-100 ' onClick={handlebutton}  >Beautiful</button>
       <button className='border p-2 m-5  bg-white hover:bg-amber-100 'onClick={handlebutton}>Wonderful</button>
       <button className='border p-2 m-5  bg-white hover:bg-amber-100 ' onClick={handlebutton}>Gorgeous</button>
       <button className='border p-2 m-5  bg-white hover:bg-amber-100 'onClick={handlebutton}>Nice</button> */}
       </div>
       <input  className=' border p-4 w-[20vw] m-10 bg-white'type="text" placeholder='Enter comment ...'  value={text}  onChange={(e)=>e.target.value}/>
       <button className='border p-2 m-5 bg-white hover:bg-amber-100 w-50 ' onClick={handlesubmit}>Send Comment</button>
       {comment && <p>
        Submitted comment is :{comment}
       </p> }
      </div>
    </div>
  )
}

export default comment


