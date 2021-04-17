import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className= 'hero-container'>
            {/* <video src="../videos/video-1.mp4" autoPlay loop muted /> */}
            <h1>WELCOME</h1>
            <p>Have a look </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Resume
                    </Button>
            </div>
        </div>
    )
}

export default HeroSection
