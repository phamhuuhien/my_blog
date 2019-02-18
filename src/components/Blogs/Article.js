// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ article }) => (
    <div key={article.name} className="col-md-6">
        <div className="media blog-media">
            <Link to="/blogitem">
                <img className="d-flex" src={article.imageUrl} alt="Generic placeholder image"/>
            </Link>
            <div className="circle">
                <h5 className="day">14</h5>
                <span className="month">sep</span>
            </div>
            <div className="media-body">
                <Link to="/blogitem"><h5 className="mt-0">{article.name}</h5></Link>
                {article.description}
                <Link to="/blogitem" className="post-link">Read More</Link>
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