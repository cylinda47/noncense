
import {
  RECEIVE_ALL_DIAMONDS,
  RECEIVE_DIAMOND
} from '../diamonds/DiamondsActions';
import merge from 'lodash/merge';

const diamondsReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
       case RECEIVE_ALL_DIAMONDS:
           return action.diamonds; 
        case RECEIVE_DIAMOND: 
            return merge({}, state, { [action.diamond.id]: action.diamond }); 
        default:
            return state; 
    }
}

export default diamondsReducer;
