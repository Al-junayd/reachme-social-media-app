import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Terms from "./components/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Axios from "axios";
import ViewSinglePost from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";
import ExampleContext from "./ExamplContext";

Axios.defaults.baseURL = "http://localhost:3000";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("reachMeAppToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessages(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <ExampleContext.Provider value={{ addFlashMessages, setLoggedIn }}>
      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <Main />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<ViewSinglePost />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ExampleContext.Provider>
  );
}

export default App;
