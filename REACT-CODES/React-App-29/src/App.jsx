// App.jsx
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Greetings from "./components/Greetings.jsx";
import Counter from "./components/Counter.jsx";
import Moods from "./components/Mood.jsx";
import Auth from "./components/Auth.jsx";
import UseReduce from "./components/UseReducer.jsx";
import UseContext from "./components/UseContext.jsx";
import InfoPage from "./components/InfoPage.jsx";
import Login from "./components/Login.jsx";
import Home2 from "./components/Home2.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Greetings" element={<Greetings />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Moods" element={<Moods />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/UseReduce" element={<UseReduce />} />
        <Route path="/UseContext" element={<UseContext />} />
        <Route path="/Info" element={<InfoPage />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Home2" element={<Home2/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
