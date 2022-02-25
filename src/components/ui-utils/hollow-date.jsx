import styled from 'styled-components'

const HollowInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`
export const HollowDate = props =>
  <HollowInput type="date" {...props} />