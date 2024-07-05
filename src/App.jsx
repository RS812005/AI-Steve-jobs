import Home from "./pages/Home/Home";
import Chatbot from "./pages/Chatbot/Chatbot";
import Chatbot_testing from "./pages/Chatbot/Chatbot_testing";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/chatbot" element={<Chatbot></Chatbot>} />
          {/* <Route path="/chatbot" element={<Chatbot_testing></Chatbot_testing>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
