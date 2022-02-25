
  const INITIAL_STATE = {
    error: true,
    SearchData:null,
    loading:null
  };
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_SEARCH_DATA':
        // console.warn(action.payload)
        return {...state, ...action.payload};
        case 'CLEAR_SEARCH_DATA':
          // console.warn(action.payload)
          return {...state,SearchData:null,loading:null};
      default:
        return state;
    }
  }
  
  
  
  