import React from "react"
import Cell from "./Cell"

const Board = ({ cells, onClick }) => {
  return (
    <div className="col-xl-5 col-sm-12 d-flex justify-content-center">
      <div onClick={onClick} id="board" >
        {cells.map((row, rowIndex) => (
          <div key={rowIndex} className="d-flex text-dark">
            {row.map((cell, colIndex) => (
              <Cell key={colIndex} data={cell} row={rowIndex} col={colIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
