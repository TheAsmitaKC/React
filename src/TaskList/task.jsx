import React, { useRef, useState } from 'react'

const task = () => {
    const [addtext, setaddtext]= useState('')
    const [task, settask] = useState('')
    const handleaddbutton=(e)=>{
        setaddtext(e.target.innerText)
    }
  return (
    <div className=' flex flex-col justify-center h-[100vh] items-center'>
    <div className='bg-amber-200 h-[60vh] w-[30vw] flex flex-col items-center'>
      <h1 className='text-3xl mt-10'>Add Task</h1>  
      <div  className='mt-10  '>
      <input  className=' border p-3 w-[20vw]  bg-white'type="text" placeholder='Enter comment ...' value={task} onChange={(e)=>e.target.value} />
      <button className='p-3 border ml-10  bg-white }' onClick={handleaddbutton}>Add</button>
      {addtext && <li>{setaddtext}</li> }
  </div>
    </div>
  </div>
  )
}

export default task