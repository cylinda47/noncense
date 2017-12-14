import merge from 'lodash/merge';
import { RECEIVE_ALL_DIAMONDS, RECEIVE_DIAMOND } from '../diamonds/DiamondsActions';


const initialState = {
    data: null
}

const diamondsReducer = (state = initialState, action) => {
    let newState; 
    switch(action.type){
       case RECEIVE_ALL_DIAMONDS:
           return action.diamonds; 
        case RECEIVE_DIAMOND: 
            return action.diamond; 
        default:
            return state; 
    }
}

export default diamondsReducer; 