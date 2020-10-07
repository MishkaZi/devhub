import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile'; //<====Thats the problem -_-
import post from './post';

export default combineReducers({
  alert,
  auth,
  profile,
  post
});
