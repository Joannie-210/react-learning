import './App.css'
import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Service from './pages/service';
import State from './pages/state';
import Post from './pages/post'
import Get from './pages/get';
import Weather from './pages/weather';
import { Routes, Route } from 'react-router-dom'

function App() {

  const siteCities = ["New York","Paris","Tokyo","Sydney","Cape Town"]

  return (
    <>
    
     <Routes>
      <Route path='/' element={ <Homepage cities={siteCities}/> }/>
      <Route path='/contact' element={ <Contact/> }/>
      <Route path='/service' element={ <Service/> }/>
      <Route path='/state' element={ <State/> }/> 
      <Route path='/post' element={ <Post/> }/>         
      <Route path='/get' element={ <Get/> }/>   
      <Route path='/weather' element={ <Weather/> }/>              
     </Routes>
    </>
  )
}


export default App
