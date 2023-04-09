/**
 * @Author linzeguang
 * @Date 2023-03-24 12:01:28
 * @LastEditTime 2023-03-27 11:22:05
 * @LastEditors linzeguang
 * @Description
 */

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import en from './locales/en'

export type Keys = keyof typeof en

export enum Language {
  EN = 'en-US',
}

export const resources = {
  [Language.EN]: {
    translation: en,
  },
}

const language = Language.EN

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: language,
  // interpolation: {
  //   escapeValue: false,
  // },
  detection: {
    caches: ['localStorage'],
  },
})

export default i18n
