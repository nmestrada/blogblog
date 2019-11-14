import axios from 'axios';

//action const
const GET_POSTS = 'GET_POSTS';
const NEW_POST = 'NEW_POST';

//action creator 
const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts
    }
};
const newPost = (postData) => {
    return {
        type: NEW_POST,
        postData
    }
}

//thunks
export const fetchAllPosts = () => {
    return async(dispatch) => {
        try{
            const {data} = await axios.get('/api/posts');
            console.log(data);
            dispatch(getPosts(data));
        }catch(err){
            console.log(err);
        }
    }
} 

export const newPostThunk = (postData) => {
    return async(dispatch) => {
        try{
            const {data} = await axios.post('/api/posts', postData);
            dispatch(newPost(data))
        }catch(err){
            console.log(err)
        }
    }
}

//reducer
const posts = (state = [], action) => {
    switch(action.type){
        case GET_POSTS:
            return action.posts;
        case NEW_POST:
            return [...state, action.postData]
        default:
            return state;
    }
};

export default posts;