export const loginUser = (userData) => ({
  type: 'AUTH_USER',
  payload: userData,
});
export const getTables = (TABLES) => ({
  type: 'GET_TABLES',
  payload: TABLES,
});
export const addTables = (Payload) => ({
  type: 'ADD_TABLE',
  payload: Payload,
});
export const GetExtension = (Payload) => ({
  type: 'GET_Extension',
  payload: Payload,
});

// export const LogoutUser = () => ({
//   type: 'LOGOUT_USER',
//   payload: api.LogoutUser(),
// });
// export const loginWithfacebook = (userData) => ({
//   type: 'AUTH_USER',
//   payload: api.onFacebookButtonPress(userData),
// });
// export const GetUserById = (Uid) => ({
//   type: 'GET_USER',
//   payload: api.getUserById(Uid),
// });

// export const UpdateUserData = (uid, datas, loginwithfb) => ({
//   type: 'UPDATE_USER',
//   payload: api.UpdateUserData(uid, datas, loginwithfb),
// });
