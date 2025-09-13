
import {Routes, Route , Link} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/common/Navbar'
import About from './Pages/About'
import Footer from './components/common/Footer'
import Reviews from './Pages/Reviews'
import MyPlans from './Pages/MyPlans'
import AddTrip from './Pages/AddTrip'
function App() {
  

  return (
    <>
     <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Reviews' element={<Reviews/>}></Route>
        <Route path='/MyPlans' element={<MyPlans/>}></Route>
        <Route path='/AddTrip' element={<AddTrip/>}></Route>
      </Routes>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
