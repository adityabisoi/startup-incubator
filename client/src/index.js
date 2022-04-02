import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ap from './Ap';
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {createStore,applyMiddleware, compose} from "redux";
import reducers from "./reducers"
const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)),window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <Ap />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
