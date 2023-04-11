export type SignType = 'login' | 'register'

export interface SignData {
  username: string
  password: string
  confirmPassword?: string
  telephone?: string
  argeement: boolean
}
