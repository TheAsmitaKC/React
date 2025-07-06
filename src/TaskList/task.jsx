import React, {  useEffect, useState } from 'react'

const task = () => {
    const [text, settext]= useState([''])
    const [task, settask] = useState([])
    const handlesubmit=(e)=>{
e.preventDefault();
localStorage.setItem("task",JSON.stringify(task));

settask((prev)=>[...prev,text]);
settext("")
    }
    useEffect(()=>{
      const saved = localStorage.getItem('tasks');
    if (saved) {
      settask(JSON.parse(saved));
    }
    },[])
    
    console.log(task.length)
  return (
    <div className=' flex flex-col justify-center h-[100vh] items-center'>
    <div className='bg-amber-200 h-[60vh] w-[30vw] flex flex-col items-center'>
      <h1 className='text-3xl mt-10'>Add Task</h1>  
      <form  className='mt-10  ' onSubmit={handlesubmit}>
        
      <input  className=' border p-3 w-[20vw]  bg-white'type="text" placeholder='Enter comment ...' value={text} onChange={(e)=>settext(e.target.value)} />
     
    <button className=' border p-3  ml-5 mb-10 bg-white' type='submit'>Add</button>
    
    <h1 className='text-2xl'>Task List</h1>
    <ul>{task.length ===0 && <li>No tasks found</li>}
    {task.length >0 && task.map((item, index)=><li  key={index}>{item}</li>)}
    </ul>

  </form>
    </div>
  </div>
  )
}

 export default task
// import React, { useState } from 'react'

// const task = () => {
//   const [text, settext]= useState([''])
//   const [task, settask]= useState([])
//   function handlesubmit(){
//   settask((prev)=>[...prev, text])
//   settext("")
//   }
//   console.log(task.length, "TASK LENGTH");
//   return (
//     <div><div>
//       <input type="text" placeholder='Enter task to add' className='border' value={text} onChange={(e)=>settext(e.target.value)} />
//       <button className='border' onClick={handlesubmit}>Add</button>
//       <h1>Task here</h1>
//       <ul>
//       {task.length===0 && <p>No task found</p>}
//       {task.length >0 && task.map((item, index)=> <li key={index}>{item}</li>) }
//         </ul>
//       </div></div>
//   )
// }
// export default task