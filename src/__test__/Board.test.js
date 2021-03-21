import React from "react"
import { render } from "@testing-library/react"
import Board from "../components/Board"

beforeAll(() => {
    localStorage.setItem('isAuth', 'true')
})
it("renders Board", () => {
  const cells = [
    [2, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]
  const { container } = render(<Board cells={cells} onClick={jest.fn} />)
  expect(
    container.querySelector("[data-row='0'][data-col='0']"),
  ).toHaveTextContent(/X/i)
  expect(
    container.querySelector("[data-row='3'][data-col='2']"),
  ).toHaveTextContent(/O/i)
  expect(
    container.querySelector("[data-row='0'][data-col='4']"),
  ).toHaveTextContent(/O/i)
})

