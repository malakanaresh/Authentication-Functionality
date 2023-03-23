// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'

const LogoutButton = props => {
  const onLogOut = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" onClick={onLogOut}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
