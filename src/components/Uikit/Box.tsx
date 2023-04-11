import styled from '@emotion/styled'
import { Flex, Stack } from '@mantine/core'

export const Card = styled(Stack)``

export const PageMain = styled.div`
  padding-left: ${({ theme }) => theme.other.pageSpacing};
  padding-right: ${({ theme }) => theme.other.pageSpacing};
`

export const FixedBox = styled(Flex)`
  position: fixed;
`

export const FlexColumn = styled(Flex)``
FlexColumn.defaultProps = {
  direction: 'column',
}