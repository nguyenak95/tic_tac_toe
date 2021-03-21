import React from "react"

const ScoreBoard = ({ score }) => {
  return (
    <div className="p-3 col-xl-3 col-sm-12 bg-dark" id='score_board'>
      <div className="d-flex flex-column score">
        <div>Player</div>
        <div>{score.player}</div>
      </div>
      -
      <div className="d-flex flex-column score">
        <div>Bot</div>
        <div>{score.bot}</div>
      </div>
     
    </div>
  )
}

export default ScoreBoard
