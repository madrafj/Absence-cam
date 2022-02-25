import styled from 'styled-components'

const DetStat = styled.span`
  position: absolute;
  right: 1em;
  top: 1em;
  font-size: 2em;
  color: #ffff24;
  text-shadow: 1px 1px red;
`
export const DetStatus = ({stat}) =>
  <DetStat>
    { 
      stat === true ? '✔'
      : stat === false ? '✘'
      : stat === undefined ? ''
      : ''
    }
  </DetStat>