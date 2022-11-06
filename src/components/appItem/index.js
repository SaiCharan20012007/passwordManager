import './index.css'

const M = Math.ceil(Math.random() * 10)

const styles = [
  'profile-card11',
  'profile-card10',
  'profile-card9',
  'profile-card8',
  'profile-card7',
  'profile-card6',
  'profile-card5',
  'profile-card4',
  'profile-card3',
  'profile-card2',
  'profile-card1',
]
const profilecard = styles[M]
const AppItem = props => {
  const {id, website, username, password, onDelete, checked} = props

  const starsImg = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )
  const result = checked ? <p>{password}</p> : starsImg

  const deleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <div className="sub">
        <div className={profilecard}>{username.charAt(0)}</div>
        <div className="list-des">
          <p className="website-style">{website}</p>
          <p className="username-style">{username}</p>
          {result}
        </div>
      </div>
      <button className="deletebtn" type="button" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default AppItem
