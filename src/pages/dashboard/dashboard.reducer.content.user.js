import { ACTIONs } from './dashboard.constant';

const INITAL_STATE = {
  user: {},
};

function dashboardReducerContentUser(state = INITAL_STATE, action) {
  switch (action.type) {
    case ACTIONs.HANDLE_USER_INFOR_BY_ID:
      return {
        ...state, user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default dashboardReducerContentUser;
