import styled from 'styled-components'
import { ButtonBase } from './button-base'

export const Button = styled(ButtonBase)`
  --bgc: ${({outlined}) => outlined ? 'var(--bg5)' : 'var(--bg4)'};
  width: 6rem;
  height: 2.25rem;
  border-radius: 4px;
  border: ${({outlined}) => outlined ? '2px solid var(--bg4)' : 'none'};
  color: ${({outlined}) => outlined ? 'var(--bg4)' : 'var(--tx1)'};
  font-weight: 600;
`