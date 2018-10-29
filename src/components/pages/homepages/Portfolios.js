// IMPORT PACKAGE REFERENCES

import React from 'react';


// COMPONENT

let portfolios = [
    {
        'name': 'New project 1',
        'description': 'project project',
        'image': 'http://themes.iamabdus.com/nexa/1.2/assets/img/portfolio/p1.jpg',
    },
    {
        'name': 'New project 2',
        'description': 'project project',
        'image': 'http://themes.iamabdus.com/nexa/1.2/assets/img/portfolio/p1.jpg',
    }
];
const Portfolios = () => (
    <main className="p-3 animated fadeIn">
        <section>
            <div className="container ">
                <div className="row justify-content-md-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title text-center title-ex1">
                            <h2>Our Portfolio</h2>
                            <p>Inventore cillum soluta inceptos eos platea, soluta class laoreet repellendus imperdiet optio.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="catagory col-12 justify-content-center">
                        <ul id="filters">
                            <li className="button is-checked active" data-filter=".all">
                                <a href="">See All</a>
                            </li>
                            <li className="button" data-filter=".ui-design">
                                <a href="">UI Design </a>
                            </li>
                            <li className="button" data-filter=".branding">
                                <a href="">Branding</a>
                            </li>
                            <li className="button" data-filter=".photography">
                                <a href="">Photography</a>
                            </li>
                            <li className="button" data-filter=".web-design">
                                <a href="">Web Design</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row no-gutters portfolio_grid">
                    {portfolios.map(element => {
                        return (
                            <div key={element.name} className="col-lg-3 col-sm-6 element all branding">
                                <div className="card">
                                    <div className="card_img">
                                        <a href=""><img className="img-full" src={element.image} /></a>
                                    </div>
                                    <div className="hover-overlay effect-scale">
                                        <div className="overlay-content">
                                            <a href="portfolio-project-details.html" className="icon icon-circle">
                                                <i className="fa fa-link" aria-hidden="true"></i>
                                            </a>
                                            <a href={element.image} data-fancybox="images" className="icon icon-circle">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </a>
                                            <a href="portfolio-project-details.html"><h6 className="overlay-title">Artworks Graphic Design</h6></a>
                                            <span>{element.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                    })
                    }
                </div>
            </div>
        </section>
    </main>
);

export { Portfolios };