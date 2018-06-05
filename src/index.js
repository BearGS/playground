import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from './reducers/todos.ts'
import Route from './routes/index.tsx'

if (module.hot) {
  module.hot.accept()
}

const store = createStore(todoReducer)

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app'),
)
