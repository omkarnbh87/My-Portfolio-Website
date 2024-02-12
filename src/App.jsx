import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/My-Portfolio-Website/" element={<Home />} />
          <Route path="/My-Portfolio-Website/home" element={<Home />} />
          <Route path="/My-Portfolio-Website/about" element={<About />} />
          <Route path="/My-Portfolio-Website/skills" element={<Skills />} />
          <Route path="/My-Portfolio-Website/projects" element={<Projects />} />
          <Route path="/My-Portfolio-Website/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
