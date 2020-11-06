import React from 'react'

export const LoginRegisterForm = ({ onSubmit, submitButton }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>{React.cloneElement(submitButton, { type: 'submit' })}</div>
    </form>
  )
}
