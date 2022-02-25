import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`
const SpinnerContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  transform: rotate(-50deg);

  div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: conic-gradient(
      var(--tx2) 0, var(--tx2) 100deg, transparent 100deg
    );
    animation: ${spin} 1.2s 20 ease-in-out;

    &:nth-child(2) { animation-delay: 0.19s; }
    &:nth-child(3) { animation-delay: 0.36s; }
  }
  
  ::after {
    content: "";
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: var(--bg2);
  }
`
export const Spinner = () =>
  <SpinnerContainer>
    <div /><div /><div />
  </SpinnerContainer>
