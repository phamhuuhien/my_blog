// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const BlogItem = ({ blogitem }) => (
    <div className="col-lg-8 order-lg-12">
        <div className="media blog-media flex-wrap">
            <img className="img-full" src="https://themes.iamabdus.com/nexa/1.2/assets/img/blog/p1.jpg" alt="blog image"/>
            <div className="circle">
                <h5 className="day">14</h5>
                <span className="month">sep</span>
            </div>
            <div className="media-body">
                <h2 className="">{blogitem.title}</h2>
                <p>{renderHTML(blogitem.description)}</p>
                <div className="blog-infor">
                    <div>by: Admin</div>
                    <div><i className="fa fa-calendar" aria-hidden="true"></i> 20 Sep, 2017</div>
                    <div><a href="#">06 comments</a></div>
                </div>
            </div>
        </div>
    </div>
);

BlogItem.propTypes = {
    blogitem: PropTypes.object.isRequired,
};

export {BlogItem};