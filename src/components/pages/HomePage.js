// IMPORT PACKAGE REFERENCES

import React from 'react';

// IMPORT IMAGES

// import react from '../../images/react-small.png';
// import reactrouter from '../../images/react-router-small.png';
// import redux from '../../images/redux-small.png';
// import bootstrap from '../../images/bootstrap4-small.png';
// import sass from '../../images/sass-small.png';
// import webpack from '../../images/webpack-small.png';
import { Articles } from './homepages/Articles.js';
import { Portfolios } from './homepages/Portfolios.js';

const HomePage = () => (
    <main>
        <div>
            <section className="bg-sand hero-block home-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="section-title title-ex1">
                                <h2 className="title-text">About Us</h2>
                            </div>
                            <p className="description">
                                Metus! Repellat itaque atque sagittis lectus, volutpat necessitatibus praesentium vestibulum atque quidem quaerat sapien. Ex dui aliqua orci dictum integer! est elit. Ipsam numquam. Accumsan explicabo vulputate quam aspernatur platea inventore iure vel ante,
                            </p>
                            <p className="description">
                                Lectus faucibus, ex eveniet! Lacus ipsum repellendus habitasse malesuada dictum dolorem purus iure congue quibusdam! Rutrum, hic itaque. Irure nihil! Ducimus? Primis rem.
                            </p>
                            <a href="page-aboutus.html" className="btn btn-default btn-primary">Read More</a>
                        </div>

                        <div className="col-md-6 ">
                            <div className="promo-video bg-image">
                                <div className="video-button video-box">
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-play play-icon" aria-hidden="true" data-video="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"></i>
                                        <span className="hide">Watch Video</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Portfolios />
            <Articles />
        </div>
    </main>
);

export { HomePage };