import React from 'react'

import { signImages } from '@/assets/images'
import { PageTopImage } from '@/components/Uikit'

import SignForm from './components/SignForm'
import Welcome from './components/Welcome'

const Sign: React.FC = () => {
  return (
    <React.Fragment>
      <PageTopImage assets={signImages['top']} />
      <Welcome />
      <SignForm />
    </React.Fragment>
  )
}

export default Sign
