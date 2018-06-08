import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Login from 'components/Login'
import * as loginActions from '../actions/login'
import withPersonalization from '../hocs/withPersonalization'

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch)

/* eslint-disable max-len */
export default withPersonalization(withRouter(connect(mapStateToProps, mapDispatchToProps)(Login)) as any)
// export default connect(mapStateToProps, mapDispatchToProps)(Login)

