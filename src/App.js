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
import PagesActive from "./pages/PagesActive";

import Logout from "./pages/Logout";
import logo from "./img/logo-01 1.svg"
import logoHome from "./img/Home.svg"
import * as PropTypes from "prop-types";

PagesActive.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  active2: PropTypes.bool,
  onClick1: PropTypes.func,
  active3: PropTypes.bool,
  onClick2: PropTypes.func,
  active4: PropTypes.bool,
  onClick3: PropTypes.func,
  active5: PropTypes.bool,
  onClick4: PropTypes.func,
  active6: PropTypes.bool,
  onClick5: PropTypes.func
};

export default function App() {

    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)

  return (
    <div className="bodyBG">
      <div className="leftMenu">
        <img className="logoTop" src={logo} alt=""/>
        <ul className="pages">
          <PagesActive active={active} onClick={() => {
              {setActive(!active)}
              {setActive2(false)}
              {setActive3(false)}
              {setActive4(false)}
              {setActive5(false)}
              {setActive6(false)}
            }
          }
                       active2={active2} onClick2={() => {
            {setActive2(!active)}
            {setActive(false)}
            {setActive3(false)}
            {setActive4(false)}
            {setActive5(false)}
            {setActive6(false)}
          }
          }
                       active3={active3} onClick3={() => {
            {setActive3(!active)}
            {setActive2(false)}
            {setActive(false)}
            {setActive4(false)}
            {setActive5(false)}
            {setActive6(false)}
          }
          }
                       active4={active4} onClick4={() => {
            {setActive4(!active)}
            {setActive2(false)}
            {setActive3(false)}
            {setActive(false)}
            {setActive5(false)}
            {setActive6(false)}
          }
          }
                       active5={active5} onClick5={() => {
            {setActive5(!active)}
            {setActive2(false)}
            {setActive3(false)}
            {setActive4(false)}
            {setActive(false)}
            {setActive6(false)}
          }
          }
                       active6={active6} onClick6={() => {
            {setActive6(!active)}
            {setActive2(false)}
            {setActive3(false)}
            {setActive4(false)}
            {setActive5(false)}
            {setActive(false)}
          }
          }/>
          <li><Link className="homePad" to="/Logout"><img className="logoHomeImg" src={logoHome} alt=""/><span
            className="textMenu">Logout</span></Link></li>
        </ul>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/Explore" element={<Explore/>}/>
          <Route path="/Saved" element={<Saved/>}/>
          <Route path="/Subscriptions" element={<Subscriptions/>}/>
          <Route path="/Messages" element={<Messages/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Logout" element={<Logout/>}/>
        </Routes>
      </div>
    </div>
  )}

