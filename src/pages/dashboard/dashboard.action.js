import { ACTIONs } from './dashboard.constant';


function handleUserContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_USER_CONTENT, payload: 'user' });
  };
}

function handlePlayfieldContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_PLAYFIELD_CONTENT, payload: 'playfield' });
  };
}

function handleDashboardContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_DASHBOARD_CONTENT, payload: 'dashboard' });
  };
}

function handleBookingContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_BOOKING_CONTENT, payload: 'booking' });
  };
}

function handlePostContent(dispatch) {
  return () => {
    dispatch({ type: ACTIONs.HANDLE_POST_CONTENT, payload: 'post' });
  };
}

export { handleUserContent, handlePlayfieldContent, handleBookingContent, handleDashboardContent, handlePostContent };
