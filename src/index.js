import '@reach/dialog/styles.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/Logo'
import { Dialog } from '@reach/dialog'
import { LoginRegisterForm } from './components/LoginRegisterForm'

const App = () => {
  const [openModal, setOpenModal] = useState('none')

  const login = formData => {
    console.log('login', formData)
  }

  const register = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width={100} height={100} />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>close</button>
        </div>
        <h3>Login</h3>
        <LoginRegisterForm
          onSubmit={login}
          submitButton={<button variant="secondary">Login</button>}
        />
      </Dialog>

      <Dialog aria-label="Login form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>close</button>
        </div>
        <h3>Register</h3>
        <LoginRegisterForm
          onSubmit={register}
          submitButton={<button variant="secondary">Register</button>}
        />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
