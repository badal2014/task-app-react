import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './redux/reducer';
import thunk from 'redux-thunk';
import Login from './login';
import Home from './home';
import SingUp from './singUp';
import NoPageFound from './noPageFound';
import Error from './noPageFound';

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/signUp" component={SingUp} />

            <Route component={Error} />
          </Switch >
        </div>
      </HashRouter>
       </Provider>
    );
  }
}

export default App;
