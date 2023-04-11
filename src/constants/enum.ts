/**
 * @Author linzeguang
 * @Date 2023-04-07 15:42:37
 * @LastEditTime 2023-04-07 17:48:56
 * @LastEditors linzeguang
 * @Description
 */

export enum MarkDate {
  ONE = 'ONE', // 今天
  SEVEN = 'SEVEN', // 近7天
  MONTH = 'MONTH', // 本月
  LAST_MONTH = 'LAST_MONTH', // 上月
  THREE_MONTH = 'THREE_MONTH', // 近3月
  SIX_MONTH = 'SIX_MONTH', // 近6月
}

// 0：游戏转钱包; 1：钱包转游戏；2：用户充值；3：用户提现；4：其他'
export enum TransferType {
  Withdraw,
  Deposit,
  'User Recharge',
  'User Withdraw',
  Other,
}

export enum CurrencySymbols {
  PHL = '₱',
}

export enum BetStatus {
  Canceled = -1, // 已取消投注
  Settled = 1, // 已结账
  Void = 2, // 注单无效
  SCRATCH_IN_HORSEBOOK = 3, // 赛马游戏割马后退回的金额
  Refund_BET_OF_PLACE_IN_HRB = 5, // 退还赛马交易下注"位置"的金额
  Invalid = 9, // 无效交易
}

export enum BetType {
  Lose,
  Win,
}
