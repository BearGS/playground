import * as React from 'react'
import { Button } from 'antd'

interface Props {
  counter: boolean;
  increment: () => any;
}

const Login: React.SFC<Props> = (props: Props) => {
  const { counter, increment } = props
  return (
    <section className="main">
      { counter }
      <Button onClick={increment}>add</Button>
    </section>
  )
}

export default Login
