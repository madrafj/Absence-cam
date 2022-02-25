import styled from 'styled-components'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

export const DownloadExcelButton = styled(ReactHTMLTableToExcel)`
  position: relative;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  color: var(--tx1);
  --bgc: var(--bg4);
  background: var(--bgc);
  background-position: center;
  height: 2.25rem;
  width: 6rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background 1.5s;
  overflow: hidden;
  box-sizing: border-box;

  :hover {
    background: var(--bgc) radial-gradient(circle, #AAAA 1% , var(--bgc) 1%) center/100000%;
    outline: none;
  }
  :active {
    background-size: 100%;
    outline: none;
    transition: background 0s;
  }
`