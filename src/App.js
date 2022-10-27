import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage"
import Contactpage from "./Pages/Contactpage/Contactpage"
import Aboutpage from "./Pages/Aboutpage/Aboutpage"
import Footer from "./Components/Footer/Footer"
import Businessdev from './Pages/Businessdevelopment/Businessdev';



function App() {
  return (
    <div>
      <Businessdev />
      {/* <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='Aboutpage' element={<Aboutpage/>} />
        <Route path='Contactpage' element={<Contactpage/>} />
      </Routes> */}
      <Footer/>
      {/* <Homepage/>
      <Aboutpage/>
      <Contactpage/>
      <Footer/> */}
    </div>
  );
}

export default App;
