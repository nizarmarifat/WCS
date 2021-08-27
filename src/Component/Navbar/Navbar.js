import React, { useEffect } from 'react'
import "./Navbar.css";
import Logo from "../../images/logo.png"

function Navbar({toggle}) {
const navscroll = () => {
   const navbar = document.getElementById("navbar")
    if(window.scrollY >= 80){
        navbar.classList.add("sticky");
    }else{navbar.classList.remove("sticky");}
}
useEffect(()=>{
    window.addEventListener('scroll',navscroll)
})
    return (
        <div className="navbar" id="navbar" navScroll={navscroll}>
            <div className="container">
                <div className="content">
                    <div className="logo">
                        <img src={Logo} alt=""></img>
                    </div>
                    <ul className="menu-list">
                        <div className="icon cancel-btn">
                            <i className="fas fa-times"></i>
                        </div>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">SURVEY</a></li>
                        <li><a href="#">MAPS</a></li>
                        <li><a href="#">DASHBOARD</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign-Up</a></li>
                        <li><a href="#">EN <i className="fas fa-chevron-down"></i></a></li>
                    </ul>
                    <div className="icon menu-btn" onClick={toggle}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar