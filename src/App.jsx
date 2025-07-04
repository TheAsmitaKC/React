import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Comment from "./Commentsuggestion/comment"
import Home from "./home"
import Task from "./TaskList/task"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
