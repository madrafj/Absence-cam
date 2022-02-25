import styled from 'styled-components'

export const Table = styled.table`
  position: relative;
  margin: 0;
  white-space: nowrap;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid var(--tx2);
  --shd: 1px 1px 1px var(--bg2);
  
  th {
    border: 1px solid var(--tx2);
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  thead {
    th {
      position: sticky;
      outline: 1px solid var(--tx2);
      top: -1px;
      z-index: 1;
      height: 1.5rem;
      min-width: 2em;
      max-width: 2.4em;
      color: var(--bg3);
      background-color: var(--tx3);
    }
    tr:first-child {
      th {
        min-width: 4rem;
        &:first-child {
          background-color: var(--tx3);
          z-index: 2;
          left: -1px;
          max-width: 5.5.rem;
        }
      }
    }
    tr:nth-child(2) th {
      top: calc(1.5rem - 1px);
      background-color: var(--bg4);
    }
  }
  tbody {
    th {
      font-weight: normal;
      background-color: var(--bg1);
      left: 0;
      &:first-child {
        position: sticky;
        left: -1px;
        max-width: 5.5.em;
        text-align: left;
        padding-left: .2em;
        text-shadow: var(--shd);
        background-color: var(--bg3);
        z-index: 1;
      }
    }
    tr:last-child > th {
      height: 2rem;
      vertical-align: bottom;
    }
  }
`