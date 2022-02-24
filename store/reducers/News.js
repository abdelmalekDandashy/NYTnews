import * as ACTIONS from '../actions/Actions'

const INITIAL_STATE = {
  News: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_NEWS':
      // console.warn(action.payload)
      return {
        ...state, ...action.payload
      };
    default:
      return state;
  }
}