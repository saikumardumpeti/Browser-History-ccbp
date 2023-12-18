import './index.css'

const UerHistoryList = props => {
  const {userList, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userList

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="list-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div>
        <div className="title-container">
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <div className="delete-container">
        <button type="button" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default UerHistoryList
