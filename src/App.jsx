import React,{ useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home'
import CareerPath from './components/careerpath/careerpath'
import { Govtpath } from './components/government/govtpath'
import { About } from './components/About'
import { Login } from './components/login'
import { Registration } from './components/registration'
import Navbars from './navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbars/>
      <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/careerpath' element = {<CareerPath/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<h2>Page Not Found</h2>} />
          <Route path='/govtpath' element={<Govtpath/>}/>
      </Routes>
    </>
  )
}

export default App;








