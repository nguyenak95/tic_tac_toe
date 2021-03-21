export const pickRandomBlankCell = (boards) => {
  const len = boards[0].length

  let rdRow = Math.floor(Math.random() * len)
  let rdCol = Math.floor(Math.random() * len)

  while (boards[rdRow].indexOf(0) === -1) {
    rdRow = Math.floor(Math.random() * len)
  }
  while (boards[rdRow][rdCol] !== 0) {
    rdCol = Math.floor(Math.random() * len)
  }
  return {
    row: rdRow,
    col: rdCol,
  }
}
export const checkWinner = (boards, lastMove) => {
  const len = boards[0].length
  const { row, col } = lastMove
  const lastRow = boards[row]
  const lastCol = boards.map((row) => row[col])
  const firstDiagonal = [boards[row][col]]
  const secondDiagonal = [boards[row][col]]
  for (let i = 1; i < len; i++) {
    if (row - i >= 0 && col - i >= 0) {
      firstDiagonal.unshift(boards[row - i][col - i])
    }
    if (row + i <= len - 1 && col + i <= len - 1) {
      firstDiagonal.push(boards[row + i][col + i])
    }
  }
  for (let i = 1; i < len; i++) {
    if (row - i >= 0 && col + i <= len - 1) {
      secondDiagonal.push(boards[row - i][col + i])
    }
    if (row + i <= len - 1 && col - i >= 0) {
      secondDiagonal.unshift(boards[row + i][col - i])
    }
  }
  const playerWinRegex = new RegExp("11111", "g")
  const botWinRegex = new RegExp("22222", "g")
  const isPlayerWin = [lastRow, lastCol, firstDiagonal, secondDiagonal].some(
    (entry) => entry.join("").match(playerWinRegex) !== null,
  )
  const isBotWin = [lastRow, lastCol, firstDiagonal, secondDiagonal].some(
    (entry) => entry.join("").match(botWinRegex) !== null,
  )
  if (isPlayerWin) return 1
  if (isBotWin) return 2
  return 0
}
