import type { Keys, LanguageType, resources } from '.'

export type I18nT = {
  (key: Keys): string
}

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TFunction extends I18nT {}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)[LanguageType.ZH_CN]
  }
}
