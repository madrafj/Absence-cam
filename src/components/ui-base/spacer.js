import styled from 'styled-components'

export const Spacer = styled.div`
  content: "";
  height: ${({w}) => w || 10}rem;
  width: ${({w}) => w || 10}rem;
`