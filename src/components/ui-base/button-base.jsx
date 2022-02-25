import styled from 'styled-components'

const Buttonbase = styled.button`
  position: relative;
  padding: 4px 8px;
  border: none;
  color: var(--tx2);
  --bgc: transparent;
  background: var(--bgc);
  background-position: center;
  font-size: 1rem;
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
  > * {
    line-height: 2em;
  }
  svg {
    vertical-align: middle;
    margin-bottom: .2em;
    font-size: 1em;
  }
`
export const ButtonBase = ({onClick, ...props}) => {
  const handleClick = () => setTimeout(onClick, 600)

  return <Buttonbase onClick={handleClick} {...props} />
}