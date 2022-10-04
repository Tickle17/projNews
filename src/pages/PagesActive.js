import {Link} from "react-router-dom";
import logoHome from "../img/Home.svg";
import React from "react";

export default function PagesActive(props) {
  return <>
    <Link className="linkItem"  to="/home">
      <li className={props.active ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick}>
        <img className="logoHomeImg" src={logoHome} alt=""/>
          <span className="textMenu">Home</span>

    </li>
  </Link>
    <Link className="linkItem"to="/Explore">
      <li className={props.active2 ? "homePadActive " + "homePad" : "homePad" } onClick={props.onClick2}>
          <img className="logoHomeImg" src={logoHome} alt=""/>
            <span className="textMenu">Explore</span></li></Link>
  <Link className="linkItem"  to="/Saved">
    <li className={props.active3 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick3}>

        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Saved</span></li></Link>
  <Link className="linkItem" to="/Subscriptions">
    <li className={props.active4 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick4}>

        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Subscriptions</span></li></Link>
    <Link className="linkItem" to="/Messages">
    <li className={props.active5 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick5}>
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Messages</span></li></Link>
  <Link className="linkItem" to="/Settings">
    <li className={props.active6 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick6}>

        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Settings</span></li></Link>
  </>;
}
