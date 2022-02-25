import styled from 'styled-components'

const AppTitle = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: var(--tx2);
  text-shadow: 1px -1px 2px var(--tx3);
`
const BufferText = styled.div`
  margin-bottom: 1rem;
  justify-self: flex-end;
  color: var(--tx3);
  text-align: center;
`
const MenuTitle = styled.h4`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
`
export { AppTitle, BufferText, MenuTitle }