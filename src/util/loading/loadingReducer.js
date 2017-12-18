import { START_LOADING } from './loadingActions';
import { USER_LOGGED_IN } from '../../user/ui/loginbutton/LoginButtonActions';
import {
  RECEIVE_ALL_DIAMONDS,
  RECEIVE_DIAMOND,
  RECEIVE_DIAMOND_DETAILS,
  RECEIVE_OWN_DIAMONDS
} from '../../diamonds/DiamondsActions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING:
      return true;
    case RECEIVE_ALL_DIAMONDS:
    case RECEIVE_OWN_DIAMONDS:
    case RECEIVE_DIAMOND:
    case RECEIVE_DIAMOND_DETAILS:
    case USER_LOGGED_IN:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;