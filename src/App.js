import {Route, Routes, Link} from 'react-router-dom'
import React from "react";
import {useState} from "react";

import "./app.css"

import HomePage from "./pages/HomePage";
import Explore from "./pages/News";
import Saved from "./pages/Saved";
import Subscriptions from "./pages/Subscriptions";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import logo from "./img/logo-01 1.svg"
import logoHome from "./img/Home.svg"



export default function App() {

  const [active, setActive]= useState(false)

  return (
    <div className="bodyBG">
      <div className="leftMenu">
        <img className="logoTop" src={logo} alt=""/>
        <ul className="pages">
          <li className={active ? "homePadActive " +"homePad"   : "homePad"}>
            <Link className="linkItem" onClick={() =>setActive(!active)}  to="/home">
              <img className="logoHomeImg" src={logoHome} alt=""/>
              <span className="textMenu">Home</span>
            </Link>
          </li>
          <li><Link className="homePad" to="/Explore"><img className="logoHomeImg" src={logoHome} alt=""/><span className="textMenu">Explore</span></Link></li>
          <li><Link className="homePad" to="/Saved"><img className="logoHomeImg" src={logoHome} alt=""/><span className="textMenu">Saved</span></Link></li>
          <li><Link className="homePad" to="/Subscriptions"><img className="logoHomeImg" src={logoHome} alt=""/><span className="textMenu">Subscriptions</span></Link></li>
          <li><Link className="homePad" to="/Messages"><img className="logoHomeImg" src={logoHome} alt=""/><span className="textMenu">Messages</span></Link></li>
          <li><Link className="homePad" to="/Settings"><img className="logoHomeImg" src={logoHome} alt=""/><span className="textMenu">Settings</span></Link></li>
          <li><Link className="homePad" to="/Logout"><img className="logoHomeImg" src={logoHome} alt=""/><span className="textMenu">Logout</span></Link></li>
        </ul>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Saved" element={<Saved />} />
          <Route path="/Subscriptions" element={<Subscriptions />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  )}

