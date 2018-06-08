import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

type State = {
  name?: string;
}

/* eslint-disable react/no-multi-comp */
export default class Login extends React.Component<RouteComponentProps<any>, State> {
  constructor (props) {
    super(props)
    this.state = {
      name: 'xgs',
    }
  }
  render () {
    return (
      <div>
        { this.state.name }, Login!
        <Link to="/" href="/">go to /</Link>
      </div>
    )
  }
}
