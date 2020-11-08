import styled from '@emotion/styled/macro'
import * as colors from '../styles/colors'

export const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

export const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${colors.gray10}`,
  background: colors.gray,
  padding: '8px 12px',
})
