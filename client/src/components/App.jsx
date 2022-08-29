import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Invite from "./Invite";
import { Routes, Route, Link } from "react-router-dom";
import "../index.css"
import "../styles/headerStyle.css"
import Management from "./Management";
import Logo from "./Logo";


function App() {
  
  return (
    <div className="App" >
    <Header />
    <Logo />
    <Routes>
        <Route path="/" element={<Body />} />
        <Route path="invite" element={<Invite />} />
        <Route path="manage" element={<Management />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
