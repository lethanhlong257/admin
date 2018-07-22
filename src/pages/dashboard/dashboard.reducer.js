import { ACTIONs } from './dashboard.constant';

const INITAL_STATE = {
  contentType: 'dashboard',
  bookingCount: 0,
  playfieldCount: 0,
  userCount: 0,
  postCount: 0,
  bookingCountByHour: [],
  top10Booking: [],
  bookingAll: [],
  postALL: [],
  userAll: [],
  playfieldAll: [],
  userByID: {},
  historyBooking: [],
  userID: '',
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
    case ACTIONs.HANDLE_BOOKING_COUNT:
      return {
        ...state, bookingCount: action.payload,
      };
    case ACTIONs.HANDLE_PLAYFIELD_COUNT:
      return {
        ...state, playfieldCount: action.payload,
      };
    case ACTIONs.HANDLE_POST_COUNT:
      return {
        ...state, postCount: action.payload,
      };
    case ACTIONs.HANDLE_USER_COUNT:
      return {
        ...state, userCount: action.payload,
      };
    case ACTIONs.HANLDE_BOOKING_COUNT_BY_HOUR:
      return {
        ...state, bookingCountByHour: action.payload,
      };
    case ACTIONs.HANLDE_BOOKING_TOP10:
      return {
        ...state, top10Booking: action.payload,
      };
    case ACTIONs.HANLDE_BOOKING_ALL:
      return {
        ...state, bookingAll: action.payload,
      };
    case ACTIONs.HANLDE_POST_ALL:
      return {
        ...state, postALL: action.payload,
      };
    case ACTIONs.HANLDE_USER_ALL:
      return {
        ...state, userAll: action.payload,
      };
    case ACTIONs.HANLDE_PLAYFIELD_ALL:
      return {
        ...state, playfieldAll: action.payload,
      };
    case ACTIONs.HANDLE_USER_INFOR_BY_ID:
      return {
        ...state, userByID: action.payload,
      };
    case ACTIONs.HANDLE_HISTORY_BOOKING_BY_USER:
      return {
        ...state, historyBooking: action.payload,
      };
    case ACTIONs.HANDLE_USER_ACTIVE:
      return {
        ...state, userID: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default dashboardReducer;
