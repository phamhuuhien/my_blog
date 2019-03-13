// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ article }) => (
    <div key={article.id} className="col-md-6">
        <div className="media blog-media">
            <Link to={'/blogitem/' + article.id}>
                <img className="d-flex" src={article.imageUrl} alt="Generic placeholder image"/>
            </Link>
            <div className="circle">
                <h5 className="day">14</h5>
                <span className="month">sep</span>
            </div>
            <div className="media-body">
                <Link to={'/blogitem/' + article.id}><h5 className="mt-0 ellipsis-text">{article.title}</h5></Link>
                <div className="description">{article.description.replace(/&nbsp;|(<([^>]+)>)/ig,'').substr(0, 200) + "..."}</div>
                <Link to={'/blogitem/' + article.id} className="post-link">Read More</Link>
                <div className="details">
                    <span className="creator">by: Admin</span>
                    <span className="comment"><a href="blog-post-left-sidebar.html">{article.numberComment} comments</a></span>
                </div>
            </div>
        </div>
    </div>
);

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

export {Article};