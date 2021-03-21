import React from "react"

const Cell = ({ data, row, col }) => {
  return data ? (
    <div className="cell" data-row={row} data-col={col}>
      <span
        className={`cell_item${data === 2 ? " text-danger" : " text-primary"}`}
      >
        {data === 2 ? "X" : "O"}
      </span>
    </div>
  ) : (
    <div className="cell" data-row={row} data-col={col}></div>
  )
}

export default React.memo(Cell)
