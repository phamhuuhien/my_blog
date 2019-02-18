// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { BlogItem } from '../Blogs/BlogItem';
import { Sidebar } from '../Sidebar/Sidebar';

class BlogItemPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <main className="p-3 animated fadeIn">
                <h3>Blogs item</h3>

                <div className="container blogitem">
                    <div className="row">
                        <BlogItem blogitem={this.props.blogitem}/>
                        <Sidebar sidebar={this.props.sidebar}/>
                    </div>
                </div>
            </main>);
    }
}

BlogItemPage.propTypes = {
    blogitem: PropTypes.object.isRequired,
    sidebar:PropTypes.object.isRequired,
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { blogitem, sidebar } = state.blogItem;
    return { blogitem, sidebar };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(BlogItemPage);

export {hoc as BlogItemPage};