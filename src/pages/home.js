import { useState, useRef, useEffect} from "react";
import Logo from '../assets/logo512.png'
import ProfilePic from '../assets/profile-portrait.png'

import CssIcon from '../assets/icons/css.png'
import ReactIcon from '../assets/icons/download.png'
import HtmlIcon from '../assets/icons/html.png'
import JsIcon from '../assets/icons/js.png'
import NodeIcon from '../assets/icons/node.png'
import PostgreIcon from '../assets/icons/postgre.png'
import PythonIcon from '../assets/icons/python.png'

export default function Home () {


  return (
    <div className="page-wrapper">

      {//Heading and Menu
      }
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <img className="logo" src={Logo} />
        </div>
        <div className="menu-button-wrapper">
          <div className="menu-button">
            <h6>ABOUT</h6>
          </div>
          <div className="menu-button">
            <h6>PORTFOLIO</h6>
          </div>
          <div className="menu-button">
            <h6>CONTACT</h6>
          </div>
        </div>
        <div className="search-wrapper">
          <input type="text" className="search-box" placeholder="Search"/>
        </div>
      </div>

      {//Hero Section Content
      }
      <div className="hero-wrapper">
        <img className="profile-pic" src={ProfilePic} />
        <div className="hero-section-content">
          <h1>I'm Tim Volner</h1>
          <h2>Expert Web developer and AI Guru</h2>
        </div>
      </div>


      {//Skills section Content
      }
      <div className="skills-section-wrapper">
        <div className="skills-row">
          <div className="skill">
            <img src={CssIcon} className="skill-icon" />
            <h6>CSS</h6>
          </div>

          <div className="skill">
            <img src={ReactIcon} className="skill-icon" />
            <h6>React</h6>
          </div>

          <div className="skill">
            <img src={HtmlIcon} className="skill-icon" />
            <h6>HTML</h6>
          </div>

          <div className="skill">
            <img src={JsIcon} className="skill-icon" />
            <h6>Javascript</h6>
          </div>
        </div>

        <div className="skills-row">

        <div className="skill">
          <img src={NodeIcon} className="skill-icon" />
          <h6>NodeJs</h6>
        </div>

        <div className="skill">
          <img src={PostgreIcon} className="skill-icon" />
          <h6>PostgreSQL</h6>
        </div>

        <div className="skill">
          <img src={PythonIcon} className="skill-icon" />
          <h6>Python</h6>
        </div>
        </div>

      </div>


    </div>

  )


};
