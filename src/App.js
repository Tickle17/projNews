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
import options from "./img/Options.svg"
import logoLoc from "./img/Location.svg"
import logoAnalys from "./img/pie-chart 1.svg"
import logoMonth from "./img/calendar (1) 1.svg"
import logoMenu from "./img/Buttons.svg"
import searchIMG from "./img/Search.svg"

import * as PropTypes from "prop-types";
import DropDownMenu from "./newsApi/DropDownMenuSelectLanguage";




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

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)

  return (
    <div className="bodyBG">
      {/*Navigation menu*/}
      <div className="leftMenu">
        <img className="logoTop" src={logo} alt=""/>
        <ul className="pages">
          <PagesActive
            active={active} onClick={() => {
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
      </div>
      {/*Header + routes*/}
      <div className="mainBody">
        <div className="header">
          <div className="sort">
            <img className="logoHeaderIMG" src={logoLoc} alt=""/>
            <DropDownMenu ></DropDownMenu>
            <img className="logoHeaderIMG" src={logoAnalys} alt=""/>
            <div className="textHeaderSort">Analysis</div>
            <img className="optionsIMG" src={options} alt=""/>
            <img className="logoHeaderIMG" src={logoMonth} alt=""/>
            <div className="textHeaderSort">Monthly</div>
            <img className="optionsIMG" src={options} alt=""/>
          </div>
          <div className="siteSearch">
            <form style={{display:"flex", padding:"12px"}}>
              <img className="searchImg" src={searchIMG} alt="" style={{marginRight:"12px"}}></img>
              <input className="Search" type="text" value="Search for anything…" placeholder="Search" autoFocus/>
            </form>
          </div>
          <img className="logoMenu" src={logoMenu} alt=""/>
          <div className="profileImage"></div>
        </div>
        <div className="bodyRoutes">
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
    </div>
  )}

