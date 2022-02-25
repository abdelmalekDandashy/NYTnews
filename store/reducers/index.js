import {
  combineReducers
} from 'redux';
import News from './News'
import Searchdata from './SearchData'
const appReducers = combineReducers({
  News,
  Searchdata
});

export default appReducers;