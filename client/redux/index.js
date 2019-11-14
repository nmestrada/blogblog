import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import posts from './posts'
import singlePost from './singlePost'


const reducer = combineReducers({
    posts,
    singlePost
  })

  const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  );
 
export default store;