import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './pages/login/login.reducer';
import dashboardReducer from './pages/dashboard/dashboard.reducer';

export default combineReducers({
  // dashboard reducer,
  auth: authReducer,
  dashboardReducer: dashboardReducer,
  routing: routerReducer,
});
