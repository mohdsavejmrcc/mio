import { useState } from 'react'
import HomePage from './components/Homepage/Homepage'
import LoginBox from './components/Login/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './components/Main/Main'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/main' element={<Main/>}/>
          {/* <Route path='/' element={<div style={{ width: "100%", backgroundColor: "black" }}>
            Hello World
          </div>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
