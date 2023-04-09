/**
 * @Author linzeguang
 * @Date 2023-03-24 12:48:18
 * @LastEditTime 2023-03-31 18:20:24
 * @LastEditors linzeguang
 * @Description 英文文案
 */

import betting from './betting'
import game from './game'
import members from './members'
import nav from './nav'
import settings from './settings'
import sign from './sign'
import wallet from './wallet'

export default {
  stayTuned: 'Stay tuned',
  cancel: 'Cancel',
  ok: 'OK',
  next: 'Next',
  submit: 'Submit',
  ...nav,
  ...sign,
  ...members,
  ...game,
  ...settings,
  ...betting,
  ...wallet,
}
