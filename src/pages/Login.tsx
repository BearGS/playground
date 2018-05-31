import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd'

export default class Login extends React.Component<RouteComponentProps<any>> {
  constructor (props) {
    super(props)
    console.log(this.props.location.state)
  }
  render () {
    return (
      <div>
        Login!
        <Button type="primary">click</Button>
      </div>
    )
  }
}
