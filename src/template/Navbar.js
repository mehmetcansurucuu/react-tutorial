import React, { useState } from 'react'
import {navbarData} from './data/navbar'
function Navbar(){

  const [navbars,setNavbars]= useState(navbarData);


  return(
    <>
      <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>
            <div className="w3-right w3-hide-small">
              {
                navbars && navbars.map((item,index) =>{
                  return <a key={index} to="{item.url}" className="w3-bar-item w3-button">{item.name}</a>
                })
              }
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar