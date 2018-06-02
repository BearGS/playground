import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'styles/main.scss'
import Test from 'components/test'
import { a } from 'lib/delayLoadForLoadable'

a({ name: 'xgs' })

ReactDOM.render(
  <Test greeting="how are you!" />,
  document.getElementById('app'),
)

if (module.hot) {
  module.hot.accept()
}
