import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
