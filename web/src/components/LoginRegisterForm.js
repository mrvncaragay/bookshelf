/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'
import { FormGroup, Input } from './FormGroup'

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
    <form
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>{React.cloneElement(submitButton, { type: 'submit' })}</div>
    </form>
  )
}
