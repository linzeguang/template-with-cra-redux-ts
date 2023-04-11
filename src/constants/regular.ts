/**
 * @Author linzeguang
 * @Date 2023-03-28 18:52:33
 * @LastEditTime 2023-04-10 13:45:24
 * @LastEditors linzeguang
 * @Description
 */

// 4-8位数字+字母
export const username = /^[a-zA-Z0-9]{4,8}$/

// 8-12位 数字+字母+特殊字符 @$!%*?&
export const password = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,12}$/
