/** @jsx jsx */
import { jsx } from '@emotion/core'

import React, { useState, createContext, useContext } from 'react'
import VisualHidden from '@reach/visually-hidden'
import { Dialog, CircleButton } from '../components/Dialog'

const ModalContext = createContext()
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

export function Modal(props) {
  const [isOpen, setIsOpen] = useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

export const OpenButton = ({ children: child }) => {
  const [, setIsOpen] = useContext(ModalContext)

  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  })
}

export const CloseButton = ({ children: child }) => {
  const [, setIsOpen] = useContext(ModalContext)

  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

const ContentBase = props => {
  const [isOpen, setIsOpen] = useContext(ModalContext)

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

export const Contents = ({ title, children, ...props }) => {
  return (
    <ContentBase {...props}>
      <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseButton>
          <CircleButton>
            <VisualHidden>Close</VisualHidden>
            <span aria-hidden>x</span>
          </CircleButton>
        </CloseButton>
      </div>
      <h3 css={{ textAlign: 'center', fontsize: '2em' }}>{title}</h3>
      {children}
    </ContentBase>
  )
}
