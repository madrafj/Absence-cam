import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  0 { opacity: 0 }
  20% { opacity: 1 }
  80% { opacity: 1 }
  100% { opacity: 1 }
`
export const Snack = styled.div`
  position: fixed;
  bottom: 5rem;
  width: 14rem;
  opacity: 0;
  display: flex;
  padding: 6px 8px;
  overflow: hidden;
  background-color: var(--bg3);
  border-radius: 4px;
  border: 2px solid var(--tx3);
  color: var(--tx3);
  animation: ${fade} 1.6s 1 ease-in-out;
  
  ${({type}) => type === 'warning' && `
    color: var(--bg2);
    background-color: #8F9A27;
    text-shadow: 0 0 2px var(--bg1);
  `}
`