import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "tachyons"
import App from './Container/App'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import SearchReducer from './store/reducer/Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RobotsReducer from './store/reducer/RobotReducer';

const rootReducer = combineReducers({SearchReducer, RobotsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render( app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
