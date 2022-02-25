import styled from 'styled-components'
import { ButtonBase } from './button-base'

export const IconButton = styled(ButtonBase)`
  --color: ${({color}) => color || 'var(--bg4)'};
  font-size: ${({size}) => size || '1.5rem'};
  border-radius: 8px;
  border: ${({outlined}) => outlined ? '1px solid var(--color)' : 'none'}; 
  color: ${({outlined}) => outlined ? 'var(--color)' : 'var(--tx2)'};
  background: ${({outlined}) => outlined ? 'none' : 'var(--color)'};
  padding: 4px 8px;
`