import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

// let store = createStore(reducer)




// store

// action => what do?
const increment = () => {return {
  type: "INCREMENT",
  value: 3
}}

const decrement = () =>{return  {
  type: "DECREMENT",
  value: 5
  
}}

// reducer => do action to the store

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      
      return state + action.value;
      
      case "DECREMENT":
        return state -action.value;
        
        default:
          return state;
        }
      }
      
      
      let store = createStore(reducer)



      // display stuff

      store.subscribe(() => console.log(store.getState()))

// dispatch => aight reducer, do your thing
store.dispatch(increment())




ReactDOM.render(
  <React.StrictMode>
    
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);


