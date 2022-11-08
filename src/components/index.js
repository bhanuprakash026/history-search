import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="container">
      <p>{timeAccessed}</p>
      <div className="con">
        <img src={logoUrl} alt="domain logo" className="img" />

        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>

      <button type="button" onClick={onDelete} className="btn" testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
