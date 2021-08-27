import React from 'react'
import "./Hero.css"
import HeroImage from "../../images/dekor-2.png"
import HeroImage2 from "../../images/dekor.png"
import HeroLogo from "../../images/logo.png"
import ButtonPill from '../Button/ButtonPil/ButtonPill'
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay'
import ButtonSurvey from '../Button/ButtonSurvey/ButtonSurvey'
import ButtonAsset from '../Button/ButtonAsset/ButtonAsset'

function Hero() {
    return (
        <section id="hero" style={{ background: `url(${HeroImage})`, backgroundRepeat: 'no-repeat' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 pt-5">
                        <h5>BEST PORTAL FOR  WATER SURVEY</h5>
                        <h1>Technology for
                            water and health</h1>
                        <img src={HeroImage2} alt="" className="w-75" />
                        <p className="hero-p">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                        <br />
                        <ButtonPill /> <ButtonPlay />
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={HeroLogo} alt="" className="hero-img mt-5" />
                    </div>
                </div>
                <div className="wrapper-btn text-center mt-5 mb-5">
                    <ButtonSurvey />
                    <ButtonAsset />
                </div>
                <div className="news">
                    <p className="text-primary">News</p>
                    <div className="row">
                        <div className="col-md-6 border-bottom">
                            <p>2021 Jun 14 <span className="text-primary">New feature: Document storage</span></p>
                            <p>Now you can store and share files on your personal account and in your organization directly within mWater. See our new guide to learn new</p>
                        </div>
                        <div className="col-md-6 border-bottom">
                            <p>2021 Jun 14 <span className="text-primary">New feature: Document storage</span></p>
                            <p>Now you can store and share files on your personal account and in your organization directly within mWater. See our new guide to learn new</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 border-bottom">
                            <p>2021 Jun 14 <span className="text-primary">New feature: Document storage</span></p>
                            <p>Now you can store and share files on your personal account and in your organization directly within mWater. See our new guide to learn new</p>
                        </div>
                        <div className="col-md-6 border-bottom">
                            <p>2021 Jun 14 <span className="text-primary">New feature: Document storage</span></p>
                            <p>Now you can store and share files on your personal account and in your organization directly within mWater. See our new guide to learn new</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero