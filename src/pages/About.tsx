/**
 * @Author linzeguang
 * @Date 2023-03-13 16:22:54
 * @LastEditTime 2023-03-13 16:47:49
 * @LastEditors linzeguang
 * @Description
 */

import React from 'react'
import styled from '@emotion/styled'

const Box = styled.div(() => ({
  width: 200,
  height: 100,
  padding: 20,
  backgroundColor: 'red',
}))

const About: React.FC = () => {
  return <Box />
}

export default About
