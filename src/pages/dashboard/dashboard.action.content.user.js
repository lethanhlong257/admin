import { ACTIONs } from './dashboard.constant';

import get from '../api/api.get';
import { APIs } from '../api/apis';


function handleUserInforByID(dispatch) {
  return async (ID) => {
    const response = await get(APIs.apiUserByID + ID);
    const user = response.data;
    dispatch({ type: ACTIONs.HANDLE_USER_INFOR_BY_ID, payload: user });
  };
}

export { handleUserInforByID };
