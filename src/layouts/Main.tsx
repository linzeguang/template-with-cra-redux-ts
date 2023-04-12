import styled from '@emotion/styled'

interface Props {
  showHeader: boolean
  showNavs: boolean
}

const Main = styled.main<Props>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${({ theme, showHeader }) => (showHeader ? theme.other.headerHeight : 0)};
  padding-bottom: ${({ theme, showNavs }) => (showNavs ? theme.other.navHeight : '2rem')};
`

export default Main
