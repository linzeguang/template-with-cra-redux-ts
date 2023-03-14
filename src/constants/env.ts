import { EnvBase } from './types'

const baseApi = '/api'

export const ENV_BASE: Record<typeof ENV, EnvBase> = {
  mock: { baseApi: '/mock' },
  dev: { baseApi },
  sit: { baseApi },
  super: { baseApi },
  prod: { baseApi },
}

export const ENV_CONFIG = ENV_BASE[ENV]
