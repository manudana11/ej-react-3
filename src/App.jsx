import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Reservations from './components/Reservations/Reservations'
import Reserve from './components/Reserve/Reserve'
import Header from './components/Header/Header'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reserve' element={<Reserve/>}/>
      <Route path='/reservations' element={<Reservations/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
