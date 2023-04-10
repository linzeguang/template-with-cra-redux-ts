import styled from '@emotion/styled'
import { Flex, Stack } from '@mantine/core'

export const Card = styled(Stack)``

export const Box = styled.div`
  padding-left: ${({ theme }) => theme.other.pageSpacing};
  padding-right: ${({ theme }) => theme.other.pageSpacing};
`

export const FlexColumn = styled(Flex)``
FlexColumn.defaultProps = {
  direction: 'column',
}
