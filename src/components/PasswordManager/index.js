import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'

class PasswordManager extends Component {
  state = {appsList: [], website: '', username: '', password: ''}

  addApp = () => {
    console.log('Add App Triggered')
    const {website, username, password} = this.state
    const newApp = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({appsList: [...prevState.appsList, newApp]}))
    this.setState({website: ''})
    this.setState({username: ''})
    this.setState({password: ''})
  }

  changeWeb = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {appsList} = this.state
    console.log(appsList)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-icon"
        />
        <div className="card-1">
          <div className="card-1a">
            <form onSubmit={this.addApp}>
              <h1 className="card-1a-title">Add New Password</h1>
              <div className="input-element-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="web-icon"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="inputEl"
                  onChange={this.changeWeb}
                />
              </div>
              <div className="input-element-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="website"
                  className="web-icon"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="inputEl"
                  onChange={this.changeUsername}
                />
              </div>
              <div className="input-element-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="website"
                  className="web-icon"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="inputEl"
                  onChange={this.changePassword}
                />
              </div>
              <div className="btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="card-1b">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="app-icon"
            />
          </div>
        </div>
        <div className="card-2">
          <div className="card-2-bottom-section">
            <h1 className="card-1a-title">Your Passwords</h1>
            <div className="count-card">{appsList.length}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
