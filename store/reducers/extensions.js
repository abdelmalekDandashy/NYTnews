const INITIAL_STATE = {
    c1Extension:null,
    c2Extension:null
    };
    
    export default function (state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'GET_Extension':
           // console.warn(action.payload)
          return {...state, ...action.payload};
        default:
          return state;
      }
    }
    