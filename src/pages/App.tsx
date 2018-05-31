import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Button } from 'antd'

type State = {
  name?: string
}

export default class App extends React.Component<RouteComponentProps<any>, State> {
  constructor (props) {
    super(props)
    this.state = {
      name: 'xgs',
      age: 25,
    }
  }
  render () {
    return (
      <div>
        { this.state.name } { this.state.age }, App!
        <Button a="sdfs">点击</Button>
        <Button type="primary">App</Button>
        <Link to="/login">go to login</Link>
      </div>
    )
  }
}
