import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './style.css'
import boat from '../../../images/boat.jpeg'
import rain from '../../../images/rain.jpeg'
import record from '../../../images/record.jpeg'
import pont from '../../../images/pont.jpeg'
import cafe from '../../../images/cafe.jpeg'
export default function project() {
  return (
    <>
    
    <div class="box-container">
                    <div class="box1" style={{backgroundImage: `url(${pont})`}}><a class="insta" alt="Pont coffee shop tote bag display"
                            href="https://prvapalacinka.github.io/Activity-1/" height="100px" width="200px">Client
                            Work</a></div>
                    <div class="box2" style={{backgroundImage: `url(${record})`}}><a class="music" alt="record player"
                            href="https://protected-shore-90563.herokuapp.com/" height="200px"
                            width="200px">Museums App</a></div>
                    <div class="box3" style={{backgroundImage: `url(${rain})`}}><a class="UI" alt="Rain on airport runway"
                            href="https://kmanoovi.github.io/Reel-Reviews/">Reel Reviews</a>
                    </div>
                    <div class="box4" style={{backgroundImage: `url(${boat})`}}><a class="client-work" alt="water and swimmers in Croatian sea."
                            href="https://www.instagram.com/petarvidovicx/">Photography</a></div>
                    <div class="box5" style={{backgroundImage: `url(${cafe})`}} ><a class="cafe"
                            href="https://foodietracker.herokuapp.com/">Foodie Tracker</a></div>
                </div>
    </>
  )
}
