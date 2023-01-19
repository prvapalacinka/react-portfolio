import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './style.css'
import boat from '../../../images/boat.jpeg'
export default function project() {
  return (
    <>
    
    <div class="box-container">
                    <div class="box1"><a class="insta" alt="Pont coffee shop tote bag display"
                            href="https://prvapalacinka.github.io/Activity-1/" height="100px" width="200px">Client
                            Work</a></div>
                    <div class="box2"><a class="music" alt="record player"
                            href="https://open.spotify.com/artist/6HL8vRdmrOWbtmbTlx3WuY" height="200px"
                            width="200px">Music</a></div>
                    <div class="box3"><a class="UI" alt="Rain on airport runway"
                            href="https://kmanoovi.github.io/Reel-Reviews/">Reel Reviews</a>
                    </div>
                    <div class="box4" style={{backgroundImage: `url(${boat})`}}><a class="client-work" alt="water and swimmers in Croatian sea."
                            href="https://www.instagram.com/petarvidovicx/">Photography</a></div>
                    <div class="box5"><a class="cafe"
                            href="https://foodietracker.herokuapp.com/">Foodie Tracker</a></div>
                </div>
    </>
  )
}
