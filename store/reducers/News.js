import * as ACTIONS from '../actions/Actions'

function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i]._id === a[j]._id)
              a.splice(j--, 1);
      }
  }

  return a;
}


  // Merges both arrays and gets unique itemsvar
  

const INITIAL_STATE = {
  docs: null,
  error: true
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_NEWS':
      // console.warn(action.payload)
      return {...state, ...action.payload};
      case 'GET_MORE_NEWS':
      // console.warn(action.payload)
      return {
        ...state,
        docs: arrayUnique(state.docs.concat(action.payload))
    }
    default:
      return state;
  }
}



