import React from "react"

const ActionPanel = ({ onLogout, onReplay, message }) => {
  return (
    <div className="p-3 col-xl-3 col-sm-12 d-flex flex-column justify-content-around text-center">
      <div className="action_message">{message}</div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-light mr-3" onClick={onLogout}>
          Logout
        </button>
        <button className="btn btn-danger" onClick={onReplay}>
          Replay
        </button>
      </div>
    </div>
  )
}

export default ActionPanel
