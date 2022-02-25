import styled from 'styled-components'

export const Field = styled.fieldset`
  border: 1px solid var(--bg3);
  border-radius: 4px;
  padding: 2px 4px;
  flex: 0 1 12rem;
  background: var(--bg5);
  
  :focus {
    border-color: var(--tx2);
  }
  legend {
    font-size: .75rem;
  }
  input, select {
    color: var(--tx3);
    font-size: 1rem;
    border: none;
    width: 100%;
    outline: none;
    background: var(--bg5);
    &[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(0.8);
    }
  }
`