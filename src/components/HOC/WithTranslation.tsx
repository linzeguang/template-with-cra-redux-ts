import React from 'react'
import { useTranslation } from 'react-i18next'
import type { i18n, TFunction } from 'i18next'

export type TranslationType = {
  t: TFunction<'translation', undefined, 'translation'>
  i18n: i18n
}

export const WithTranslation = <Props extends TranslationType>(Component: React.FC<Props>) => {
  const EnhancedComponent: React.FC<Props> = (props) => {
    const { t, i18n } = useTranslation()

    return <Component {...props} t={t} i18n={i18n} />
  }

  return EnhancedComponent
}
