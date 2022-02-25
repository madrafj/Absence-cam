import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonBase } from '.'

export const MenuButtonBase = styled(ButtonBase)`
  --color: var(--bg4);
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 500;
  vertical-align: middle;
  line-height: 2rem;
  color: var(--tx2);
  border-radius: 12px;
  background-color: var(--color);
  width: auto;
  height: auto;
  padding: 1rem 1.5rem;
  margin-bottom: .5rem;
  text-decoration: none;

  svg {
    font-size: 2rem;
  }
`
export const MenuButton = props => {
  const navigate = useNavigate()
  const handleClick = () => navigate(props.href)

  return (
    <MenuButtonBase onClick={handleClick}>
      {props.children}
    </MenuButtonBase>
  )
}