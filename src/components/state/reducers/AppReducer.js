// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import { BlogsReducer } from './BlogsReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    blogs: BlogsReducer,
});