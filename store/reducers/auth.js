const INITIAL_STATE = {
  user: null,
  isAuth: false,
  Error:null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {...state, ...action.payload};
    default:
      return state;
  }
}
