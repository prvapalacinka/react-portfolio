import React from 'react'
import './style.css'

export default function Navigation(props) {
  return (
    <>
    <nav>
    <img src='../mountain-removebg-preview.png' alt='baby turtle logo'/>
    <h2 onClick={() => props.changePage("aboutme")}>About me</h2>
    <h2 onClick={() => props.changePage("project")}>Projects</h2>
    <h2>Contact</h2>
    <h2>Resume</h2>
    </nav>
    </>
  )
}
