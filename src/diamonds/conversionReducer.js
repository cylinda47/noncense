import { RECEIVE_CONVERSION } from '../diamonds/DiamondsActions';

const conversionReducer = (state = 680, action) => {
    switch(action.type){
       case RECEIVE_CONVERSION:
           return action.conversion; 
        default:
            return state; 
    }
}

export default conversionReducer;
