import "./Header.css";
import logo from "../assets/Spotify-logo.png";
import { useContext, useRef } from "react";
import { ContextData } from "./Store/Context";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'


function Header() {
 
  const {clickHandler,inputData,keyHandler } = useContext(ContextData)

  const container = useRef();

  
 
  return (
    <>

      <div ref={container} className="navbar">
        <div className="image-container">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>
        <div className="search-container">
          <input onKeyDown={keyHandler}  ref={inputData} className="input-box" type="text" placeholder="search"/>
          <button  onClick={clickHandler} className="search-btn" type="submit">Search</button>
        </div>
      </div>
    </>
  );
}
export default Header;
