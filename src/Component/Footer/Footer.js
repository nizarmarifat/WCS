import React from 'react'
import './Footer.css'
import GooglePlayLogo from '../../images/google-play.png'
import AppStoreLogo from '../../images/app-store-logo.png'
import Logo from '../../images/logo.png'

function Footer() {
    return (
        <footer>
            <div className="container mb-5">
                <div className="row pt-5 justify-content-center align-items-center text-center footer">
                    <div className="col-md-2 p-1 img">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <h4>Company</h4>
                        <ul>

                            <li> About</li>

                            <a href="#">
                                <li>Careers</li>
                            </a>
                            <a href="#">
                                <li>Mobile</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Contact</h4>
                        <ul>
                            <a href="#">
                                <li>Help/FAQ</li>
                            </a>
                            <a href="#">
                                <li>Press</li>
                            </a>
                            <a href="#">
                                <li>Affilates</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>More</h4>
                        <ul>
                            <a href="#">
                                <li>Airlinefees</li>
                            </a>
                            <a href="#">
                                <li>Airline</li>
                            </a>
                            <a href="#">
                                <li>Low fare tips</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-md">
                        <div className="facebook d-inline-block ml-1 mr-1 shadow-sm">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="instagram d-inline-block ml-1 mr-1 shadow-sm">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="twitter d-inline-block ml-1 mr-1 shadow-sm">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <p className="mt-2">Discover our app</p>
                        <div className="get-on">
                            <button className="google-play-inline">
                                <div className="google-play">
                                    <div className="box-img">
                                        <img src={GooglePlayLogo} alt="" />
                                    </div>
                                    <div className="box-title">
                                        <span className="font-weight-bold">GET IT ON</span>
                                        <br />
                                        <span>GOOGLE PLAY</span>
                                    </div>
                                </div>
                            </button>
                            <button className="app-store-inline">
                                <div className="app-store">
                                    <div className="box-img">
                                        <img src={AppStoreLogo} alt="" />
                                    </div>
                                    <div className="box-title">
                                        <span className="font-weight-bold">Available on the</span>
                                        <br />
                                        <span className="font-weight-bold title-apple-store">Apple Store</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-center">All rights reserved@jadoo.com</p>
            </div>
        </footer>
    )
}

export default Footer
