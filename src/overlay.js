import React from 'react'
import './styles/overlay.css'
import { Link } from 'react-router-dom'



const Overlay = (props) => {
    
    const style = () => {
        document.getElementById("btn").style.transition = ".5s";
        document.getElementById("btn").style.clipPath = "circle( 0px at var(--x) var(--y))";
        console.log("done")
  }
 

    const move = (e) => {
        let over =   document.getElementById("overlay");
        over.style.setProperty('--x',e.clientX + "px");
        over.style.setProperty('--y', e.clientY + "px")
    }
    return (
        <div>
            <div className="overlay" id="overlay" onMouseMove={move}>
                <div className="center">
                    <h1>WELCOME</h1>
                    <Link to={'/myweb'}> 
                        <button id="btn" onClick = {style}>press to enter</button>
                        </Link>
        </div>
            </div>
        </div>
    )
}

export default Overlay
