export interface LoginParams {
  account: string
  loginIp?: string
  password: string
}

export interface RegisterParams extends LoginParams {
  telephone: string
}
