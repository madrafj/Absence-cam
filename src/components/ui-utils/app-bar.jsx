import styled from 'styled-components'
import { BackButton } from '.'
import { IconButton, Spacer } from '../ui-base'

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 4rem;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: var(--bg3);
`
export const AppBar = ({ title, optButton, onOptClick, children }) =>
  <TopBar>
    <BackButton />
    {title}
    <IconButton
      color="transparent"
      onClick={onOptClick}
    >
      {optButton || <Spacer w={1.5} />}
      {children}
    </IconButton>
  </TopBar>