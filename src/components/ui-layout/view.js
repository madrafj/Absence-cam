import styled from 'styled-components'

export const View = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 600px;
  height: 100%;
  background: var(--bg2) url(${({bg}) => bg || ''}) center no-repeat;
  color: var(--tx2);

  ${({menu}) => menu && 'padding: 3rem 2.5rem; justify-content: center;'}
  ${({withLogo}) => withLogo &&
    'background: url("logo512.png") center bottom no-repeat; background-size: 128px; background-blend-mode: lighten;'
  }

  & > img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 96px;
    height: 96px;
    /* filter: contrast(50%); */
  }
`