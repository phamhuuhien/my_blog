// INITIALIZE STATE
const initialBlogs = [{
    name: 'Standard Blog Post',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '7',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b1.jpg',
}, {
    name: 'Perferendis labore',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '6',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b2.jpg',
}, {
    name: 'Deleniti incdunt magni',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '6',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b3.jpg',
}, {
    name: 'Explicabo magnam ',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '4',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b4.jpg',
}];

const initialState = {
    blogs: initialBlogs,
    fetching: false,
    fetched: false,
    failed: false
};

// REDUCER

export const BlogsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};