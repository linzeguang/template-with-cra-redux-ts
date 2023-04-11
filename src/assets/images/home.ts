/**
 * @Author linzeguang
 * @Date 2023-03-29 14:01:57
 * @LastEditTime 2023-03-29 17:27:42
 * @LastEditors linzeguang
 * @Description
 */

import type { ImageAssets } from './types'

const home: { [key: string]: ImageAssets } = {
  bg: {
    '1x': './images/home/bg.png',
    '2x': './images/home/bg@2x.png',
  },
  banner1: {
    '1x': './images/home/banner.png',
    '2x': './images/home/banner@2x.png',
  },
  login: {
    '1x': './images/home/login.png',
    '2x': './images/home/login@2x.png',
  },
  loginClicked: {
    '1x': './images/home/login_clicked.png',
    '2x': './images/home/login_clicked@2x.png',
  },
  register: {
    '1x': './images/home/register.png',
    '2x': './images/home/register@2x.png',
  },
  registerClicked: {
    '1x': './images/home/register_clicked.png',
    '2x': './images/home/register_clicked@2x.png',
  },
  prizePool: {
    '1x': './images/home/prize_pool.png',
    '2x': './images/home/prize_pool@2x.png',
  },
}

export default home
