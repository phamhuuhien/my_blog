// IMPORT PACKAGE REFERENCES

import React from 'react';

const Sidebar = () => (
    <div className="col-lg-4 blog-sidebar sidebar">
        <form className="form_search">
            <input className="form-control mr-sm-2" type="text" placeholder="Search..." />
            {/* <button className="btn-search btn-search" type="submit"><i className="fa fa-search"></i></button> */}
        </form>
        <h4>Categories</h4>
        <ul className="list-group">
            <li className="list-group-item"><a href="blog-classic-fullwidth.html">All Services</a></li>
            <li className="list-group-item"><a href="blog-classic-left-sidebar.html">Business Consulting</a></li>
            <li className="list-group-item"><a href="blog-classic-right-sidebar.html">Lowyer Consulting</a></li>
            <li className="list-group-item"><a href="blog-classic-fullwidth.html">Marketing Consulting</a></li>
            <li className="list-group-item"><a href="blog-grid-three-column.html">Financial Consulting</a></li>
            <li className="list-group-item"><a href="blog-grid-two-column.html">IT Consulting</a></li>
            <li className="list-group-item"><a href="blog-classic-left-sidebar.html">Online Consulting</a></li>
        </ul>
        <h4>Latest Post</h4>
        <div className="media">
            <img src="https://themes.iamabdus.com/nexa/1.2/assets/img/blog/ps1.jpg" alt="img" />
            <div className="media-body">
                <h6><a href="blog-post-right-sidebar.html">Mauris molestie odio elei.</a></h6>
                <p><i className="fa fa-calendar" aria-hidden="true"></i> 20 Sep, 2017</p>
            </div>
        </div>
        <div className="media">
            <img src="https://themes.iamabdus.com/nexa/1.2/assets/img/blog/ps1.jpg" alt="img" />
            <div className="media-body">
                <h6><a href="blog-post-right-sidebar.html">Cras semper neque eu est.</a></h6>
                <p><i className="fa fa-calendar" aria-hidden="true"></i> 14 Aug, 2017</p>
            </div>
        </div>
        <div className="media">
            <img src="https://themes.iamabdus.com/nexa/1.2/assets/img/blog/ps1.jpg" alt="img" />
            <div className="media-body">
                <h6><a href="blog-post-right-sidebar.html">In magna eu nisl pretium.</a></h6>
                <p> <i className="fa fa-calendar" aria-hidden="true"></i> 22 Sep, 2017</p>
            </div>
        </div>
        <h4>Popular Tags</h4>
        <div className="tags">
            <a href="#" className=" ">Consultancy</a>
            <a href="#" className=" ">Photography</a>
            <a href="#" className=" ">Agent</a>
            <a href="#" className=" ">UI Design</a>
            <a href="#" className=" ">Business</a>
            <a href="#" className=" ">Finance</a>
            <a href="#" className=" ">Web Design</a>
            <a href="#" className=" ">Support</a>
        </div>
    </div>
);

export { Sidebar };