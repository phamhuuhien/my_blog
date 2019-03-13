// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { Article } from '../Blogs/Article.js';
import { fetchBlogsAction } from '../state/actions/BlogAction';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
// COMPONENT

class BlogsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBlogsAction();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && this.renderList(this.props.blogs)
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of blogs" />
                }
            </div>
        );
    }

    renderList = (blogs) => (
        <main className="p-3 animated fadeIn">
            <h3>Blogs</h3>

            <section className="blog-content-area">
                <div className="container">
                    <div className="row">
                        {blogs.map(article => <Article key={article.id} article={article} />)}
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
    )
}

BlogsPage.propTypes = {
    fetchBlogsAction: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, blogs } = state.blogs;
    return { fetching, fetched, failed, blogs };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchBlogsAction }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(BlogsPage);

export { hoc as BlogsPage };