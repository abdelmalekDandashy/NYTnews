const INITIAL_STATE = {
  Tables:null,
  c1Tables:null,
  c2Tables:null
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_TABLES':
         // console.warn(action.payload)
        return {...state, ...action.payload};
        case 'ADD_TABLE':
         // console.warn(action.payload)
         return {...state, ...action.payload};
        ;
      default:
        return state;
    }
  }
  