export const ADMIN = 'Admin';
export const USER = 'USER';

const initState = {
  userRole: ADMIN
};

export default function userRoleReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}