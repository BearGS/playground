import * as React from 'react'
import { Button } from 'antd'
import { Link, RouteComponentProps } from 'react-router-dom'
import Form from '../containers/Form'
import withPersonalization, { IWithPersonalizationProps } from '../hocs/withPersonalization'

interface IOwnProps {
  counter: boolean;
  increment: () => any;
}

type Props = IOwnProps & RouteComponentProps<any> & IWithPersonalizationProps

const Login: React.SFC<Props> = (props: Props) => {
  const { counter, increment, name } = props
  return (
    <section className="main">
      { counter }
      { name && `userName: ${name}` }
      <Button onClick={increment}>add</Button>
      <Link to="/" href="/">go sadfto aa/</Link>
      { props.location.search }
      <hr />
      <Form />
    </section>
  )
}

export default withPersonalization(Login)
