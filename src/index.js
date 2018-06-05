import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from './reducers/todos.ts'
import Route from './routes/index.tsx'
// import DevTools from './containers/DevTools.tsx'

if (module.hot) {
  module.hot.accept()
}

// const store = createStore(todoReducer, DevTools.instrument())
let store
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'production' || !(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  store = createStore(todoReducer)
} else {
  store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app'),
)
