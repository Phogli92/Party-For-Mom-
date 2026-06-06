import './App.css'
import Hello  from './pages/hello/hello.jsx'
import Home from './pages/home/home.jsx'
import AddCard from './pages/addcards/addcards.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hello />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/addCard' element={<AddCard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
