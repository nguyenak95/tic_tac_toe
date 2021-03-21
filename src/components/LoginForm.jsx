import React from "react"

const LoginForm = (props) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    error: "",
  })
  const onChangeInput = (e) => {
    setFormData(
      Object.assign({}, formData, {
        [e.target.name]: e.target.value,
        error: "",
      }),
    )
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formData
    if (email !== "test@example.com") {
      return setFormData(
        Object.assign({}, formData, {
          error: "Not found any user with this email",
        }),
      )
    }
    if (password !== "123456") {
      return setFormData(
        Object.assign({}, formData, { error: "Wrong password" }),
      )
    }
    localStorage.setItem("isAuth", "true")
    props.setIsAuth(true)
  }
  return (
    <form className="login_form" onSubmit={onSubmit}>
      <h3>Sign in</h3>
      <div className={formData.error ? "text-danger" : "text-light"}>
        {formData.error || "Error Message"}
      </div>
      <div className="login_form_item">
        <label htmlFor="email">Email</label>
        <input
          className="col-12 pl-1"
          id="email"
          name="email"
          type="email"
          placeholder="Input your email"
          onChange={onChangeInput}
          required
        />
      </div>
      <div className="login_form_item">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Input password"
          className="col-12 pl-1"
          onChange={onChangeInput}
          required
        />
      </div>
      <div className="login_form_item">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
