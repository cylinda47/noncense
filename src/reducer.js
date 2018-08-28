import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import web3Reducer from './util/web3/web3Reducer'
import diamondsReducer from './diamonds/diamondsReducer'
import conversionReducer from './diamonds/conversionReducer'
import loadingReducer from './util/loading/loadingReducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  web3: web3Reducer, 
  diamonds: diamondsReducer,
  conversion: conversionReducer,
  loading: loadingReducer
})

export default reducer
