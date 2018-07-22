import { ACTIONs } from './dashboard.constant';
import count from '../api/api.count';
import get from '../api/api.get';
import post from '../api/api.post';
import { APIs } from '../api/apis';

const USER = 'user';
const PLAYFIELD = 'playfield';
const POST = 'post';
const BOOKING = 'booking';
const DASHBOARD = 'dashboard';


function handleUserContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_USER_CONTENT, payload: USER });
  };
}

function handlePlayfieldContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_PLAYFIELD_CONTENT, payload: PLAYFIELD });
  };
}

function handleDashboardContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_DASHBOARD_CONTENT, payload: DASHBOARD });
  };
}

function handleBookingContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_BOOKING_CONTENT, payload: BOOKING });
  };
}

function handlePostContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_POST_CONTENT, payload: POST });
  };
}

function handleCount(dispatch) {
  return async (typeOfCount) => {
    let sum = '';
    switch (typeOfCount) {
      case USER:
        sum = await count(APIs.apiUserCount);
        dispatch({ type: ACTIONs.HANDLE_USER_COUNT, payload: sum.data });
        break;
      case BOOKING:
        sum = await count(APIs.apiBookingCount);
        dispatch({ type: ACTIONs.HANDLE_BOOKING_COUNT, payload: sum.data });
        break;
      case PLAYFIELD:
        sum = await count(APIs.apiPlayfieldCount);
        dispatch({ type: ACTIONs.HANDLE_PLAYFIELD_COUNT, payload: sum.data });
        break;
      case POST:
        sum = await count(APIs.apiPostCount);
        dispatch({ type: ACTIONs.HANDLE_POST_COUNT, payload: sum.data });
        break;

      default:
        dispatch({ type: 'other', payload: 0 });
        break;
    }
  };
}

function handleCountBookingByHour(dispatch) {
  return async () => {
    // return the response
    const arrayCountBookingByHour = [];
    const response = await get(APIs.apiBookingCountByHour);
    const dataOfCountBookingByHour = response.data;
    for (let i = 0; i < 24; i++) {
      arrayCountBookingByHour.push({
        name: `${i + 1}h`,
        times: dataOfCountBookingByHour[i],
      });
    }
    dispatch({ type: ACTIONs.HANLDE_BOOKING_COUNT_BY_HOUR, payload: arrayCountBookingByHour });
  };
}

function handleTop10(dispatch) {
  return async () => {
    let top10 = [];
    const response = await get(APIs.apiBookingTop10);
    top10 = response.data;
    dispatch({ type: ACTIONs.HANLDE_BOOKING_TOP10, payload: top10 });
  };
}


function handleDataContent(dispatch) {
  return async (typeOfContent) => {
    let response = [];
    switch (typeOfContent) {
      case USER:
        response = await get(APIs.apiUserShowAll);
        dispatch({ type: ACTIONs.HANLDE_USER_ALL, payload: response.data });
        break;
      case BOOKING:
        response = await get(APIs.apiBookingShowAll);
        dispatch({ type: ACTIONs.HANLDE_BOOKING_ALL, payload: response.data });
        break;
      case PLAYFIELD:
        response = await get(APIs.apiPlayfieldShowAll);
        dispatch({ type: ACTIONs.HANLDE_PLAYFIELD_ALL, payload: response.data });
        break;
      case POST:
        response = await get(APIs.apiPostShowAll);
        dispatch({ type: ACTIONs.HANLDE_POST_ALL, payload: response.data });
        break;

      default:
        dispatch({ type: 'other', payload: [] });
        break;
    }
  };
}

function handleUserInforByID(dispatch) {
  return async (ID) => {
    const response = await get(APIs.apiUserByID + ID);
    const user = response.data;
    dispatch({ type: ACTIONs.HANDLE_USER_INFOR_BY_ID, payload: user });
  };
}

function handleModelHistoryBooking(dispatch) {
  return async (ID) => {
    const response = await get(APIs.apiHistoryBookingByUser + ID);
    const historyBooking = response.data;
    dispatch({ type: ACTIONs.HANDLE_HISTORY_BOOKING_BY_USER, payload: historyBooking });
  };
}

function handleModelUserActive(dispatch) {
  return (ID) => {
    dispatch({ type: ACTIONs.HANDLE_USER_ACTIVE, payload: ID });
  };
}

function userActive(dispatch) {
  return async (ID, action) => {
    let updateActiveUser;
    switch (action) {
      case 'active':
        updateActiveUser = await post(APIs.apiUpdateActive, { ID });
        dispatch({ type: ACTIONs.HANDLE_HISTORY_BOOKING_BY_USER, payload: updateActiveUser.data });
        break;
      case 'banded':

        break;
      default:
        break;
    }
    dispatch({ type: ACTIONs.HANDLE_USER_ACTIVE, payload: ID });
  };
}


export {
  handleUserContent,
  handlePlayfieldContent,
  handleBookingContent,
  handleDashboardContent,
  handlePostContent,
  handleCount,
  handleCountBookingByHour,
  handleTop10,
  handleDataContent,
  handleUserInforByID,
  handleModelHistoryBooking,
  handleModelUserActive,
  userActive,
};
