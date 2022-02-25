import styled from 'styled-components'

export const Content = styled.div`
  flex-basis: 100%;
  display: ${({block}) => block ? 'block' : 'flex'};
  margin: .5rem;
  margin-bottom: 7rem;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  overflow: ${({sticky}) => sticky ? 'auto' : 'hidden'};
`