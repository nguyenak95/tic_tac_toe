import React, {  useState, useRef, useEffect } from "react"
import { checkWinner, pickRandomBlankCell } from "../helper"
import ActionPanel from "./ActionPanel"
import Board from "./Board"
import ScoreBoard from "./ScoreBoard"

const Game = ({ setIsAuth }) => {
  const [cells, setCells] = useState(Array(10).fill(Array(10).fill(0)))
  const [isEnd, setIsEnd] = useState(false)
  const [message, setMessage] = useState("Your Turn")
  const [score, setScore] = useState({
    player: 0,
    bot: 0,
  })
  const isPlayerTurnRef = useRef(true)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (!isEnd && !isPlayerTurnRef.current) {
        const { row, col } = pickRandomBlankCell(cells)
        const newCells = cells.map((row) => [...row])
        newCells[row][col] = 2
        setCells(newCells)
        const result = checkWinner(newCells, { row, col })
        if (result === 2) {
          setIsEnd(true)
          setScore((s) => {
            return {
              ...s,
              bot: s.bot + 1,
            }
          })
          setMessage("Bot win!")
        } else {
          isPlayerTurnRef.current = !isPlayerTurnRef.current
          setMessage("Player Turn")
        }
      }
    }, 1000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [isPlayerTurnRef.current, isEnd])

  const onLogout = () => {
    localStorage.removeItem("isAuth")
    setIsAuth(false)
  }

  const onReplay = () => {
    setCells(Array(10).fill(Array(10).fill(0)))
    setIsEnd(false)
    setMessage("")
    isPlayerTurnRef.current = true
  }
  const onClickBoard = (e) => {
    if (isEnd || !isPlayerTurnRef.current) return
    e.stopPropagation()
    const row = parseInt(e.target.dataset.row)
    const col = parseInt(e.target.dataset.col)
    if (isNaN(row) || isNaN(col)) return
    if (cells[row][col] !== 0) return

    const newCells = cells.map((row) => [...row])
    newCells[row][col] = 1
    setCells(newCells)
    const result = checkWinner(newCells, { row, col })
    if (result === 1) {
      setIsEnd(true)
      setScore((s) => {
        return {
          ...s,
          player: s.player + 1,
        }
      })
      setMessage("You win!!!")
    } else {
      isPlayerTurnRef.current = !isPlayerTurnRef.current
      setMessage("Bot Turn")
    }
  }
  return (
    <div className="d-flex flex-wrap w-100 justify-content-center">
      <ActionPanel onLogout={onLogout} onReplay={onReplay} message={message} />
      <Board onClick={onClickBoard} cells={cells} />
      <ScoreBoard score={score} />
    </div>
  )
}

export default Game
