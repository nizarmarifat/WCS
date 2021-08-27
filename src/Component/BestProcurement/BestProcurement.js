import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './BestProcurement.css'
import BestProcurementImg from '../../images/services.jpg';

function BestProcurement() {
    const options = {
        loop: true,
        nav: true,
        className:"slider",
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
        <section id="best-procurement" className="mt-5 mb-5">
            <div className="container">
                <p className="text-center m-0">Easy and Fast</p>
                <h1 className="text-center judul">We Offer Best  procurement</h1>
                <OwlCarousel {...options}>
                    <div className="card shadow-sm">
                        <div className="img">
                            <img src={BestProcurementImg} alt="" className="p-3" />
                        </div>
                        <div className="content">
                            <div className="title">
                                <p>Trip To Greece</p>
                                <p>14-29 June| by Robbin joseph</p>
                                <p><i className="fas fa-leaf"></i> <i className="far fa-map"></i><i className="fas fa-paper-plane"></i></p>
                                <p><i className="far fa-building"></i> 24 people going</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="img">
                            <img src={BestProcurementImg} alt="" className="p-3" />
                        </div>
                        <div className="content">
                            <div className="title">
                                <p>Trip To Greece</p>
                                <p>14-29 June| by Robbin joseph</p>
                                <p><i className="fas fa-leaf"></i> <i className="far fa-map"></i><i className="fas fa-paper-plane"></i></p>
                                <p><i className="far fa-building"></i> 24 people going</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="img">
                            <img src={BestProcurementImg} alt="" className="p-3" />
                        </div>
                        <div className="content">
                            <div className="title">
                                <p>Trip To Greece</p>
                                <p>14-29 June| by Robbin joseph</p>
                                <p><i className="fas fa-leaf"></i> <i className="far fa-map"></i><i className="fas fa-paper-plane"></i></p>
                                <p><i className="far fa-building"></i> 24 people going</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default BestProcurement