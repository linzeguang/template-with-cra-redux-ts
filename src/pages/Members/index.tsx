import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { membersImages } from '@/assets/images'
import { Settings } from '@/components/Svgr'
import { PageTopImage } from '@/components/Uikit'

import Info from './components/Info'

const Member: React.FC = () => {
  return (
    <Wrapper>
      <PageTopImage assets={membersImages['top']} color='#262626' />
      <SettingLink to='/settings'>
        <Settings />
      </SettingLink>
      <Info />
    </Wrapper>
  )
}

export default Member

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  background: linear-gradient(180deg, #262626, #262626, rgba(38, 38, 38, 0.01) 100%);
  transform: translateZ(0px);
`

const SettingLink = styled(Link)({
  position: 'absolute',
  zIndex: 1,
  top: 10,
  right: 10,
  padding: 10,
  display: 'flex',
})
