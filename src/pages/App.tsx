import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Button } from 'antd'

export default class App extends React.Component<RouteComponentProps<any>> {
  constructor (props) {
    super(props)
    console.log(this.props.location.state)
  }
  render () {
    return (
      <div>
        App!
        <Button type="primary">App</Button>
        <Link to="/login">to login</Link>
      </div>
    )
  }
}
