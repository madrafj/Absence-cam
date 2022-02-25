import styled from 'styled-components'
import { View } from './view'

const BackDrop = styled(View)`
  justify-content: center;
  background: ${(opaque) => opaque ? 'var(--bg5)' : 'var(--bg2)'};

  & > div {
    margin: 2rem;
    padding: 1.5rem;
    border: 1px solid var(--tx3);
    border-radius: 4px;
    background: var(--bg2);

    fieldset {
      margin-bottom: 12px;
    }
    h4 {
      text-align: center;
      margin-top: 0;
    }
  }
`
export const Modal = props =>
  <BackDrop {...props}>
    <div>
      {props.children}
    </div>
  </BackDrop>