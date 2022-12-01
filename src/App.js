import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Terms from "./components/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
