import React from "react";
import "./header.css";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [pass, setpass] = useState(true);
  const [theme, settheme] = useState("dark");
  useEffect(() => {
    
    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    } else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
    
  }, [theme]);
  return (
    <header className=" flix">
      <button 
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"

      >
        <img className="menu-button" src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-menu-icon-image_1344445.jpg" alt="" />
      
      </button>
      <div></div>
      <nav>
        
      </nav>
      <button onClick={() => {
        // send data to local storage:
        localStorage.setItem("currentmode" ,  theme ==="dark" ?"light" : "dark")
        // get data from local storage :
        settheme(localStorage.getItem("currentmode"))
      }} className="mode menu" >
      <img className="menu-button" src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk5My03MS5wbmc.png" alt="" />
      </button>

      {showModal && (
        <div className=" fixed">
          <ul className="model  ">
            <li className="close ">
              <button className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              >
                
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
