import { ACTIONs } from './dashboard.constant';

const INITAL_STATE = {
  contentType: 'dashboard',
};

function dashboardReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case ACTIONs.HANDLE_USER_CONTENT:
      return {
        ...state, contentType: action.payload,
      };
    case ACTIONs.HANDLE_DASHBOARD_CONTENT:
      return {
        ...state, contentType: action.payload,
      };
    case ACTIONs.HANDLE_PLAYFIELD_CONTENT:
      return {
        ...state, contentType: action.payload,
      };
    case ACTIONs.HANDLE_BOOKING_CONTENT:
      return {
        ...state, contentType: action.payload,
      };
    case ACTIONs.HANDLE_POST_CONTENT:
      return {
        ...state, contentType: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default dashboardReducer;
