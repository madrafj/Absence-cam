import styled from "styled-components"

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.5rem 2rem 0;
  width: 100%;
  background-color: var(--bg2);

  >* {
    margin-bottom: 1rem;
  }

  ${({bottom}) =>
    bottom && 'position: absolute; bottom: 0;'
  }
`