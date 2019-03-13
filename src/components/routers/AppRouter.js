// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { BlogsPage } from '../pages/BlogsPage';
import { ZipCodesPage } from '../pages/ZipCodesPage';
import { BlogItemPage } from '../pages/BlogItemPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/zipcodes' component={ZipCodesPage} />
                <Route path='/blogs' component={BlogsPage} />
                <Route path='/blogitem/:id' component={BlogItemPage} />
                <Route path='/about' component={AboutPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);