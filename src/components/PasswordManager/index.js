import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'

// eslint-disable-next-line no-unused-vars
import AppItem from '../appItem'

class PasswordManager extends Component {
  state = {
    appsList: [],
    website: '',
    username: '',
    password: '',
    search: '',
    checked: false,
  }

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

  deleteApp = id => {
    const {appsList} = this.state
    const filteredList = appsList.filter(each => each.id !== id)
    this.setState({appsList: filteredList})
  }

  changeWeb = event => {
    this.setState({website: event.target.value})
  }

  changeSearch = event => {
    const {search, appsList} = this.state
    this.setState({search: event.target.value})
    const updated = appsList.filter(eachApp =>
      eachApp.website.toLowerCase().includes(search.toLowerCase()),
    )
    this.setState({appsList: updated})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  toggleChange = () => {
    const {checked} = this.state
    return this.setState({checked: !checked})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {appsList, website, username, password, search, checked} = this.state
    const updated = appsList.filter(eachApp =>
      eachApp.website.toLowerCase().includes(search.toLowerCase()),
    )
    console.log(appsList)
    const emptyImage = (
      <div className="empty-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="emptyImg"
        />
        <p>No Passwords</p>
      </div>
    )

    return (
      <div className="bg-container">
        <form> </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-icon"
        />
        <div className="card-1">
          <div className="card-1a">
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
                value={website}
              />
            </div>
            <div className="input-element-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="web-icon"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="inputEl"
                onChange={this.changeUsername}
                value={username}
              />
            </div>
            <div className="input-element-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="web-icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="inputEl"
                onChange={this.changePassword}
                value={password}
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="add-btn" onClick={this.addApp}>
                Add
              </button>
            </div>
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
            <div className="count-container">
              <h1 className="card-1a-title">Your Passwords</h1>
              <div className="count-card">
                <p>{appsList.length}</p>
              </div>
            </div>
            <div className="search-tab">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <hr />
              <input
                type="search"
                className="searchbar"
                placeholder="Search"
                onChange={this.changeSearch}
              />
            </div>
          </div>
          <div className="vertical-line"> </div>
          <div className="checkbox-container">
            <input type="checkbox" id="check" onClick={this.toggleChange} />
            <label htmlFor="check">Show Passwords</label>
          </div>

          {appsList.length === 0 ? emptyImage : ''}

          <ul className="unordered-list">
            {appsList.map(each => (
              <AppItem
                key={each.id}
                id={each.id}
                website={each.website}
                username={each.username}
                password={each.password}
                onDelete={this.deleteApp}
                checked={checked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
