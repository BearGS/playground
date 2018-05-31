import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Route from './routes/index.tsx'
import './styles/main.scss'
// import './app.tsx'

// console.log(style)

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Route />,
  document.getElementById('app'),
)
