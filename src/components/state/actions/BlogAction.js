import axios from 'axios';

export const FETCH_BLOGS = 'FETCH_BLOGS';
export const FETCH_BLOGS_PENDING = 'FETCH_BLOGS_PENDING';
export const FETCH_BLOGS_FULFILLED = 'FETCH_BLOGS_FULFILLED';
export const FETCH_BLOGS_REJECTED = 'FETCH_BLOGS_REJECTED';
export const URL = 'https://www.googleapis.com/blogger/v3/blogs/896552112627376607/posts/?key=AIzaSyD65h5BpsrvneTSOPrM0rrR8XpOUylwQVg';

// ACTION GENERATORS

export const fetchBlogsAction = () => ({
    type: FETCH_BLOGS,
    payload: fetchBlogs()
});

const fetchBlogs = () => {
    return new Promise((resolve, reject) => {
        axios.get(URL)
            .then(res => resolve(res.data.items))
            .catch(err => reject(err));
    });
};