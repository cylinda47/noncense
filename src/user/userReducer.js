import { RECEIVE_OWN_DIAMONDS } from '../diamonds/DiamondsActions';

const initialState = {
  data: null,
  diamondIds: []
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  if (action.type === 'USER_LOGGED_OUT')
  {
    return Object.assign({}, state, {
      data: null
    })
  }

  if (action.type === RECEIVE_OWN_DIAMONDS)
  {
    return Object.assign({}, state, {
      diamondIds: action.diamondIds
    })
  }

  return state
}

export default userReducer
