import React, { useState } from 'react'

import Navbar from '../Component/Navbar/Navbar.js'
import Hero from '../Component/Hero/Hero.js'
import About from '../Component/About/About.js'
import Services from '../Component/Servicess/Services.js'
import BestProcurement from '../Component/BestProcurement/BestProcurement.js'
import Testimonial from '../Component/Testimonial/Testimonial.js'
import Portfolio from '../Component/Portfolio/Portfolio.js'
import Footer from '../Component/Footer/Footer.js'
function App (){
    const toggle =()=>{
        const navbar = document.querySelector(".navbar");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        cancelBtn.onclick = ()=>{
            navbar.classList.remove("show");
            menuBtn.classList.remove("hide");
          }
          
        
    }
    
    return (
        <div>
            <Navbar toggle={toggle}/>
            <Hero />
            <About/>
            <Services />
            <BestProcurement />
            <Testimonial />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default App