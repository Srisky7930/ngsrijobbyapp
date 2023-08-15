import {Link, withRouter} from 'react-router-dom'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <div>
        <Link className="link-text" to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="links-items">
        <Link className="link-text" to="/">
          <li> Home </li>
        </Link>
        <Link className="link-text" to="/jobs">
          <li> Jobs </li>
        </Link>
      </ul>

      <div className="routes-container">
        <ul className="links-items-sm">
          <Link className="link-text" to="/">
            <AiFillHome className="home" />
          </Link>
          <Link className="link-text" to="/jobs">
            <BsFillBriefcaseFill className="jobs" />
          </Link>
        </ul>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
        <button
          type="button"
          className="logout-button-sm"
          onClick={onClickLogout}
        >
          <FiLogOut />
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
