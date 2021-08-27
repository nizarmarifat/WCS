import React from 'react'
import './Portfolio.css'
import BgPortfolio from '../../images/dekor-portfolio-3.png'
import Axioon from '../../images/axioon.png'
import Jetstar from '../../images/jetstar.png'
import Expedia from '../../images/expedia.png'
import Qantas from '../../images/qantas.png'
import Alitalia from '../../images/alitalia.png'

function Portfolio() {
    return (
        <section id="portfolio" style={{background:`url(${BgPortfolio})`}}>
            <div className="container mt-5">
                <p style={{ color: "#5E6282" }} className="text-center">PORTOFOLIO</p>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="img-hover">
                        <img src={Axioon} alt="" />
                    </div>
                    <div className="img-hover">
                        <img src={Jetstar} alt="" />
                    </div>
                    <div className="img-hover">
                        <img src={Expedia} alt="" />
                    </div>
                    <div className="img-hover">
                        <img src={Qantas} alt="" />
                    </div>
                    <div className="img-hover">
                        <img src={Alitalia} alt="" />
                    </div>
                </div>
                <div className="form-wrapper text-center mt-3">
                    <h3 className="text-center ">Subscribe to get information, latest news and other <br />
                        interesting offers about Cobham</h3>
                    <button className="email mr-3 text-left font-weight-bold mb-1">
                        <i className="far fa-envelope"></i> Your email
                    </button>
                    <button className="subscribe text-center">
                        <span>Subscribe</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
