import styled from 'styled-components'

export const Img = styled.img`
  object-fit: contain;

  @media (min-aspect-ratio: 3/8) {
    width: 100vw;
    max-height: 100vw;
  }
  @media (min-aspect-ratio: 3/4) {
    width: 80vw;
    max-height: 80vw;
  }
  @media (min-aspect-ratio: 1/1) {
    height: 60vh;
    width: 60vh;
  }
`