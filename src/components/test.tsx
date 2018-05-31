import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import radius from 'styles/radius.local.scss'

import 'styles/bg.scss'

interface Props {
  greeting: string
}
interface State {
  name: string
}

class Test extends React.Component<Props, State> {
  static propTypes = {
    greeting: PropTypes.string.isRequired,
  }
  constructor (props) {
    super(props)
    this.state = {
      name: 'xgs',
    }
  }
  render () {
    const { greeting } = this.props
    return (
      <div
        className={cs('pink', 'bg', radius['br5'])}
        style={{ background: '#999' }}
      >
        { greeting }, { this.state.name }!
      </div>
    )
  }
}

export default Test
