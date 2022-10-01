import {Link} from "react-router-dom";
import logoHome from "../img/Home.svg";
import React from "react";

export default function PagesActive(props) {
  return <>
    <li className={props.active ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick}>
      <Link className="linkItem"  to="/home">
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Home</span>
      </Link>
    </li>
    <li className={props.active2 ? "homePadActive " + "homePad" : "homePad" } onClick={props.onClick2}>
      <Link className="linkItem"to="/Explore">
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Explore</span></Link></li>
    <li className={props.active3 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick3}>
      <Link className="linkItem"  to="/Saved">
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Saved</span></Link></li>
    <li className={props.active4 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick4}>
      <Link className="linkItem" to="/Subscriptions">
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Subscriptions</span></Link></li>
    <li className={props.active5 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick5}>
      <Link className="linkItem" to="/Messages">
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Messages</span></Link></li>
    <li className={props.active6 ? "homePadActive " + "homePad" : "homePad"} onClick={props.onClick6}>
      <Link className="linkItem" to="/Settings">
        <img className="logoHomeImg" src={logoHome} alt=""/>
        <span className="textMenu">Settings</span></Link></li>
  </>;
}
