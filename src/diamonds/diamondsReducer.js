import {
  RECEIVE_ALL_DIAMONDS,
  RECEIVE_DIAMOND,
  RECEIVE_DIAMOND_DETAILS
} from '../diamonds/DiamondsActions';
import merge from 'lodash/merge';

const diamondsReducer = (state = {}, action) => {
    switch(action.type){
       case RECEIVE_ALL_DIAMONDS:
           return action.diamonds; 
        case RECEIVE_DIAMOND: 
        case RECEIVE_DIAMOND_DETAILS: 
            return merge({}, state, { [action.diamond.id]: action.diamond }); 
        default:
            return state; 
    }
}

export default diamondsReducer;
