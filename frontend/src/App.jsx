import { Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import AppRoutes from './components/Routes/AppRoutes'
import Newsletter from './components/Newsletter.jsx/Newsletter'
import Footer from './components/Footer/Footer'

function App() {

  return (
   <div className='App'>
    <Header/>
    <div className='main'>
    <AppRoutes />
    </div>
     <Newsletter/>
     <Footer/>
   </div>
  )
}

export default App
