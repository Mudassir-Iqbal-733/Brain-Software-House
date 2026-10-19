import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import ServiceDetails from "./components/services/ServiceDetails";
import CustomCursor from "./components/CustomCursor";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;