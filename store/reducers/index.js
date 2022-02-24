import {combineReducers} from 'redux';
import auth from './auth';
import Tables from './Tables'
import extensions from './extensions'
const appReducers = combineReducers({
  auth,
  Tables,
  extensions
});

export default appReducers;
