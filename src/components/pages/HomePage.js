// IMPORT PACKAGE REFERENCES

import React from 'react';

// IMPORT IMAGES

// import react from '../../images/react-small.png';
// import reactrouter from '../../images/react-router-small.png';
// import redux from '../../images/redux-small.png';
// import bootstrap from '../../images/bootstrap4-small.png';
// import sass from '../../images/sass-small.png';
// import webpack from '../../images/webpack-small.png';


// COMPONENT

const HomePage = () => (
    <main>
        <section id="about" className="section">
            <div className="container wow softFadeInUp" data-wow-delay="0.3s">	

                <div className="section-header text-center">
                    <span className="display-5 text">Lorem Ipsum</span>
                    <h2 className="section-title display-2">About Us</h2>
                    <span className="line"><i className="icon-livejournal"></i></span>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                        <h3 className="display-3 mb-4">Boka Business Company Inc</h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquapta. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquipter consequat adipisicing sedari. 
                        </p>
                        <p className="mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euugi at nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>
                        <a href="" className="btn btn-md btn-outline-primary">Read More</a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <div className="card card-style-3 mb-4 clearfix">
                            <div className="card-icon">
                                <i className="icon-search"></i>
                            </div>
                            <div className="card-block">
                                <h4 className="card-title display-4">Creative</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit mini.</p>
                            </div>
                        </div>

                        <div className="card card-style-3 mb-4 clearfix">
                            <div className="card-icon">
                                <i className="icon-thumbs-o-up"></i>
                            </div>
                            <div className="card-block">
                                <h4 className="card-title display-4">Productive</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit mini.</p>
                            </div>
                        </div>

                        <div className="card card-style-3 mb-4 clearfix">
                            <div className="card-icon">
                                <i className="icon-pie"></i>
                            </div>
                            <div className="card-block">
                                <h4 className="card-title display-4">Flexible</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit mini.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <section>
        </section>

        {/* <section id="blog" class="section">
            <div class="container">
                <div class="section-header text-center wow softFadeInUp" data-wow-delay="0.0s">
                    <span class="display-5 text">Cool stuffs from us</span>
                    <h2 class="section-title display-2">Blogs</h2>
                    <span class="line"><i class="icon-livejournal"></i></span>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 block blog wow softFadeInUp" data-wow-delay="0.2s">
                        <div class="blog-img">
                            <img class="img-fluid lazy" data-src="images/blog/1.jpg" alt="">
                        </div>
                        <div class="blog-header mb-3">
                            <div class="blog-date bg-primary">
                                <span>13</span>
                                <span>May</span>
                            </div>
                            <span class="blog-category text-muted mb-1">Jaromir Muravyov</span>
                            <h4 class="blog-title"><a href="#">A tell of two kidneys!</a></h4>
                        </div>

                        <p class="blog-content">Curabitur mollis laoreet urna, eget viverra turpis ornare id. Curabitur nec porta erat. Donec bibendum nibh a volutpat rhoncus.</p>
                    </div>

                    <div class="col-12 col-md-4 block blog wow softFadeInUp" data-wow-delay="0.4s">
                        <div class="blog-img">
                            <img class="img-fluid lazy" data-src="images/blog/2.jpg" alt="">
                        </div>

                        <div class="blog-header mb-3">
                            <div class="blog-date bg-primary">
                                <span>26</span>
                                <span>Mar</span>
                            </div>
                            <span class="blog-category text-muted mb-1">Christina Akers</span>
                            <h4 class="blog-title"><a href="#">To operate or not is the q</a></h4>
                        </div>
                        <p>Praesent vestibulum at libero id congue. Sed iaculis blandit lobortis. Pellentesque quis enim quis odio vestibulum ornare sed eu ligula</p>
                        
                    </div>

                    <div class="col-12 col-md-4 block blog wow softFadeInUp" data-wow-delay="0.6s">
                        <div class="blog-img">
                            <img class="img-fluid lazy" data-src="images/blog/3.jpg" alt="">
                        </div>

                        <div class="blog-header mb-3">
                            <div class="blog-date bg-primary">
                                <span>11</span>
                                <span>Mar</span>
                            </div>
                            <span class="blog-category text-muted mb-1">Peter Grant Jr</span>
                            <h4 class="blog-title"><a href="#">10 tips to avoid heart risk</a></h4>
                        </div>
                        <p>Praesent vestibulum at libero id congue. Sed iaculis blandit lobortis. Pellentesque quis enim quis odio vestibulum ornare sed eu ligula</p>
                    </div>

                </div>
            </div>
        </section> */}
    </main>
);

export { HomePage };