import React from 'react'

const home = () => {
  return (
    <div className='justify-center items-center flex flex-col'>
      <a  className='cursor-pointer'href='./comment'>Go to comment suggestion</a>
      <br />
      <a className='cursor-pointer' href='./task'>Go to task list</a>
    </div>
  )
}

export default home