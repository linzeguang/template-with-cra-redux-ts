import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Stack } from '@mantine/core'

import { Filters } from '@/components/Svgr'
import { Drawer, Loading, StepButton, useModal } from '@/components/Uikit'
import { useLayoutHeader } from '@/layouts'

const About: React.FC = () => {
  const { t } = useTranslation()
  const { setRightNode } = useLayoutHeader()
  const openModal = useModal({ text: t('sign.logout.confirm') })

  useEffect(() => {
    setRightNode(<Drawer targetNode={<Filters height='100%' />} title='Vendor' />)
  }, [setRightNode])

  return (
    <div>
      <h1 onClick={openModal}>About page</h1>
      <Stack>
        <Loading visible />
        <br />
        <br />
        <br />
        <br />
      </Stack>
      <StepButton>next</StepButton>
    </div>
  )
}

export default About
