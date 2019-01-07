// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { Article } from '../Blogs/Article.js';
// COMPONENT

class BlogsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <main className="p-3 animated fadeIn">
                <h3>Blogs</h3>

                <section className="blog-content-area">
                    <div className="container">
                        <div className="row">
                            {this.props.blogs.map(article => <Article key={article.name} article={article}/>)}
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="pagination th-pagination d-flex justify-content-center flex-wrap">
                                <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a></li>
                                <li className="page-item"><a className="page-link" href="#"><span>1</span></a></li>
                                <li className="page-item"><a className="page-link" href="#"><span>2</span></a></li>
                                <li className="page-item"><a className="page-link" href="#"><span>3</span></a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </main>
        );
    }
}

BlogsPage.propTypes = {
    blogs: PropTypes.array.isRequired,
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { blogs } = state.blogs;
    return { blogs };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(BlogsPage);

export {hoc as BlogsPage};