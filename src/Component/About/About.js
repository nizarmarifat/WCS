import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './About.css'
import Dekor from '../../images/dekor-3.jpg'
import Itali from '../../images/itali.png'
import London from '../../images/london1.png'
import Eropa from '../../images/eropa.png'

function About() {
    const options = {
        loop: true,
        nav: true,
        className: "slider",
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 10,
                stagePadding: 10,
            },
            680: {
                items: 2,
                nav: false,
                margin: 10,
            },
            1000: {
                items: 3,
                margin: 10,
            }
        }
    }
    return (
        <section id="about" className="mt-5 mb-5">
            <div className="container" style={{ background: `url(${Dekor})`, backgroundRepeat: 'no-repeat' }}>
                <h1 className="text-center judul" >About Us</h1>
                <OwlCarousel {...options}>
                    <div className="card shadow-sm">
                        <div className="img">
                            <img src={Itali} alt="" />
                        </div>
                        <div className="content">
                            <div className="title">
                                Rome, Italty <span className="float-right">$5,42k</span>
                                <p><i className="fas fa-paper-plane pr-3"></i>10 Days trip</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="img">
                            <img src={London} alt="" />
                        </div>
                        <div className="content">
                            <div className="title">
                                London, UK <span className="float-right">$4.2k</span>
                                <p><i className="fas fa-paper-plane pr-3"></i>12 Days trip</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="img">
                            <img src={Eropa} alt="" />
                        </div>
                        <div className="content">
                            <div className="title">
                                Full Europe <span className="float-right">$15k</span>
                                <p><i className="fas fa-paper-plane pr-3"></i>28 Days trip</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default About