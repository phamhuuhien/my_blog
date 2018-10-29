// IMPORT PACKAGE REFERENCES

import React from 'react';


// COMPONENT

const news = [{
    name: 'Standard Blog Post',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '7',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b1.jpg',
}, {
    name: 'Perferendis labore',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '6',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b2.jpg',
}, {
    name: 'Deleniti incdunt magni',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '6',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b3.jpg',
}, {
    name: 'Explicabo magnam ',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '4',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b4.jpg',
}];
const Articles = () => (
    <main className="p-3 animated fadeIn">
        <section className="home-blog bg-sand">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title text-center title-ex1">
                            <h2>Latest News</h2>
                            <p>Inventore cillum soluta inceptos eos platea, soluta class laoreet repellendus imperdiet optio.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {news.map(article => 
                        (<div key={article.name} className="col-md-6">
                            <div className="media blog-media">
                                <a href="blog-post-left-sidebar.html">
                                    <img className="d-flex" src={article.imageUrl} alt="Generic placeholder image"/>
                                </a>
                                <div className="circle">
                                    <h5 className="day">14</h5>
                                    <span className="month">sep</span>
                                </div>
                                <div className="media-body">
                                    <a href=""><h5 className="mt-0">{article.name}</h5></a>
                                    {article.description}
                                    <a href="blog-post-left-sidebar.html" className="post-link">Read More</a>
                                    <div className="details">
                                        <span className="creator">by: Admin</span>
                                        <span className="comment"><a href="blog-post-left-sidebar.html">{article.numberComment} comments</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </main>
);

export {Articles};