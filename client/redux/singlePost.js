import axios from 'axios';
//action const
const GET_POST = 'GET_POST';

//action creators
const getPost = (postData) => {
    return {
        type: GET_POST,
        postData
    }
}

//thunk
export const fetchPost = (postId) => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get(`/api/posts/${postId}`);
            dispatch(getPost(data));
        }catch(err){
            console.error(err);
        }
    }
}

//reducer 
const singlePost = (state = {}, action) => {
    switch (action.type) {
        case GET_POST:
          return action.postData;
        default:
          return state;
      }
}

export default singlePost