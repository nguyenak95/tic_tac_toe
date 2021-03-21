import React from "react"
import Game from "./components/Game"
import LoginForm from "./components/LoginForm"

function App() {
  const [isAuth, setIsAuth] = React.useState(
    () => !!localStorage.getItem("isAuth"),
  )
  return (
    <div id="game">
      <h1>TIC TAC TOE</h1>
      {!isAuth ? <LoginForm setIsAuth={setIsAuth} /> : <Game setIsAuth={setIsAuth} />}
    </div>
  )
}

export default App
