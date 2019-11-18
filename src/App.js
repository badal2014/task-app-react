import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './redux/reducer';
import thunk from 'redux-thunk';
import Login from './login';


import Error from './noPageFound';


import './helper.scss'
import MainContainer from './mainContainer';

class App extends Component {
  render() {
    const store = createStore(combineReducers, applyMiddleware(thunk));
    return (
      <Provider store={store}>
      <HashRouter>
        <div>
          {/* <Navbar /> */}
          <Switch >
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={MainContainer} />
            <Route exact path="/signUp" component={MainContainer} />
            <Route exact path="/task" component={MainContainer} />
            <Route exact path="/profile" component = {MainContainer} />
            <Route exact path="/deleteProfile" component = {MainContainer} />

            <Route component={Error} />
          </Switch >
        </div>
      </HashRouter>
       </Provider>
    );
  }
}

export default App;
