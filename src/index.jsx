// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// data flows in Redux (dispatch(action) -> reducer -> new state -> re-render)

const initialState = {
  count: 0
};

// ↓Reducer
// Remember the reducer’s job is to take the current state and an action
// and figure out the new state.
// So if the reducer received an action like { type: "INCREMENT" },
// what might you want to return as the new state?


// Action parameter→
// → An “action” is a JS object that describes a change that we want to make.
// → The only requirement is that the object needs to have a type property,
// → and its value should be a string.
function reducer(state = initialState, action) {
  // Remember that the reducer’s job is to return a new state,
  // even if that state is unchanged from the current one.

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }

  // One piece of this puzzle remains:
  // we need a way to feed an action into our reducer function
  // so that we can increment and decrement the counter.

  // Actions are not born, but they are dispatched, with a handy function called "dispatch".
  // You can call store.dispatch(someAction),
  // but that’s not very convenient since the store instance is only available in one file.

  // In addition to injecting the result of mapStateToProps as props,
  // "connect" also injects the "dispatch" function as a prop.
}


const store = createStore(reducer);

// State and reducers << Le Wagon Way >>
// const reducers = combineReducers({
//   changeMe: (state = null, action) => state
// });

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
