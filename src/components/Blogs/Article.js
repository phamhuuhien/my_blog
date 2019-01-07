// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
    <div key={article.name} className="col-md-6">
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
);

Article.propTypes = { article: {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    numberComment: PropTypes.number.isRequired,
} };

export {Article};