import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

setTimeout(function () {
  store.dispatch({
    type:'SET_GUITARS',
    payload:[
      {
        id:0,
        title:'ESP-8string'
      }
    ]
  });
  
},1000);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

