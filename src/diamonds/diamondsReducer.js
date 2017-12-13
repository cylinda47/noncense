import { RECEIVE_ALL_DIAMONDS } from '../diamonds/DiamondsActions';


const initialState = {
    data: null
}

const diamondsReducer = (state = initialState, action) => {
    let newState; 
    switch(action.type){
       case RECEIVE_ALL_DIAMONDS: 
       console.log("reducer");
       console.log(action);
           return action.diamonds; 
        default:
            return state; 
    }
}

export default diamondsReducer; 