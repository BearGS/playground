import * as React from 'react'
import { Link } from 'react-router-dom'
import withQueryString, { IQueryStringProps } from '../hocs/withQueryString'
import TestHistory from './TestHistory'

type State = {
  name?: string;
  age?: number;
  value?: string;
}

interface IOwnProps {}

class App extends React.Component<IQueryStringProps & IOwnProps, State> {
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
        { this.props.searchParams.token }
        <Link to="/login" href="/login">go to login</Link>
        <TestHistory searchParams={{ token: 3 }} />
      </div>
    )
  }
}

export default withQueryString(App)
