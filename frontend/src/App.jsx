import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
    <Navbar />

    <Routes>
<Route path="/" element={<Home />} />

    </Routes>
    </>
  )
}

export default App