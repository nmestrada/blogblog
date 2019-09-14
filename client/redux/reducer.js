import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';
import axios from 'axios';

export const reducer = (state = {}, action) => {
    switch(action.type){
        default:
            return state;
    }
}