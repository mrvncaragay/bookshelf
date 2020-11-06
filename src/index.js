/** @jsx jsx */
import { jsx } from '@emotion/core'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import '@reach/dialog/styles.css'
import ReactDOM from 'react-dom'
import { Logo } from './components/Logo'
import { LoginRegisterForm } from './components/LoginRegisterForm'
import { Modal, OpenButton, Contents } from './components/modal'
import { Button } from './components/Button'

const App = () => {
  const login = formData => {
    console.log('login', formData)
  }

  const register = formData => {
    console.log('register', formData)
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <OpenButton>
            <Button variant="primary">Login</Button>
          </OpenButton>
          <Contents aria-label="Login form" title="Login">
            <LoginRegisterForm
              onSubmit={login}
              submitButton={<Button variant="primary">Login</Button>}
            />
          </Contents>
        </Modal>

        <Modal>
          <OpenButton>
            <Button variant="secondary">Register</Button>
          </OpenButton>
          <Contents aria-label="register form" title="Register">
            <LoginRegisterForm
              onSubmit={register}
              submitButton={<Button variant="primary">Register</Button>}
            />
          </Contents>
        </Modal>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
