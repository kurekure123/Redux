import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

// const reducer = (state, action) => {
//   console.log('reduce :', state, action);
//   if(action.type === 'changeState'){
//     return action.payload.newState
//   }
//   return 'State'
// }

const produceReducer = (state = [], action)=>{
  return state;
}

const userReduce = (state = '', action)=>{
  switch (action.type) {
    case 'updateUSer':
      return action.payload;
    default :
      return state;
  }
  return state ;
}

const allReducers = combineReducers({
  products:produceReducer,
  users:userReduce
})


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
console.log(store.getState())

const action = {
  type:'updateUser',
  payload:{
    newState:'Tom'
  }
}
store.subscribe(()=>{console.log('subscribe : ', store.getState())});

store.dispatch(action);

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
