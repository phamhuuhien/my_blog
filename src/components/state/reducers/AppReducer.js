// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import { BlogsReducer } from './BlogsReducer';
import { BlogItemReducer } from './BlogItemReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    blogs: BlogsReducer,
    blogItem: BlogItemReducer,
});