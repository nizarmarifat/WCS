import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css'
import ImageTestimonial from '../../images/udil.jpg'

function Testimonial() {
    const options = {
        loop: true,
        center: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
            }
        }
    }
    return (
        <section id="testimonial">
            <div className="container">
                <p className="text-center" style={{ color: '#5E6282' }}>TESTIMONIAL</p>
                <h1 className="judul text-center">What people say about Us.</h1>
                <div className="gtco-testimonials">
                    <div className="testimonial">
                        <OwlCarousel {...options}>
                            <div className="card text-center item" >
                                <img className="card-img-top" src={ImageTestimonial} alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                            <div className="card text-center item">
                                <img className="card-img-top" src={ImageTestimonial} alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                            <div className="card text-center item">
                                <img className="card-img-top" src={ImageTestimonial} alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </OwlCarousel>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
