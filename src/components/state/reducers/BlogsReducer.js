import { 
    FETCH_BLOGS_PENDING,
    FETCH_BLOGS_FULFILLED,
    FETCH_BLOGS_REJECTED
} from '../actions/BlogAction';

// INITIALIZE STATE
const initialBlogs = [{
    id: 1,
    title: 'Standard Blog Post',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '7',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b1.jpg',
}, {
    id: 2,
    title: 'Perferendis labore',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '6',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b2.jpg',
}, {
    id: 3,
    title: 'Deleniti incdunt magni',
    description: 'Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.',
    numberComment: '6',
    imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b3.jpg',
}, {
    id: 4,
    title: 'Explicabo magnam ',
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
        case FETCH_BLOGS_PENDING:
            return {
                ...state,
                blogs: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_BLOGS_FULFILLED: {
            let data = action.payload.map(ele => ({
                id: ele.id,
                title: ele.title, 
                description: ele.content,
                numberComment: '4',
                imageUrl: 'http://themes.iamabdus.com/nexa/1.2/assets/img/blog/b4.jpg',
            }));
            return {
                ...state,
                blogs: data,
                fetching: false,
                fetched: true,
                failed: false
            };
        }
        case FETCH_BLOGS_REJECTED:
            return {
                ...state,
                blogs: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};