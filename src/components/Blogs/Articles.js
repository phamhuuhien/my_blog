// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { Article } from './Article.js';

class Articles extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
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
                        {this.props.blogs.map(article => <Article key={article.id} article={article}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

Articles.propTypes = {
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

const hoc = connect(mapStateToProps, mapDispatchToProps)(Articles);

export {hoc as Articles};