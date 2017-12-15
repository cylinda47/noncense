import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
import DiamondsIndexContainer from './diamonds/diamondsIndex/DiamondsIndexContainer'; 
import DiamondShowContainer from './diamonds/diamondShow/DiamondShowContainer'
import DiamondsFormContainer from './diamonds/diamondsForm/DiamondsFormContainer'
import getWeb3 from './util/web3/getWeb3'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import SignUp from './user/layouts/signup/SignUp'

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.

getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/signup" component={UserIsNotAuthenticated(SignUp)} />
            <Route path="/diamonds/:diamondId" component={(DiamondShowContainer)} />
            <Route path="/new" component={UserIsAuthenticated(DiamondsFormContainer)} />
            <Route exact path="/diamonds" component={UserIsAuthenticated(DiamondsIndexContainer)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
