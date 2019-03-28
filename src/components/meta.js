import pay1 from '@/assets/images/pay1.png'
import pay2 from '@/assets/images/pay2.png'
import pay3 from '@/assets/images/pay3.png'
import user from '@/assets/images/user.png'
import res1 from '@/assets/images/res1.png'
import res2 from '@/assets/images/res2.png'
export const USER = user
export const PAY_LIST = [
  {
    label: '微信支付',
    value: 1,
    src: pay1
  }, {
    label: '支付宝支付',
    value: 2,
    src: pay2
  }, {
    label: '银联支付',
    value: 3,
    src: pay3
  }
]
export const RESULT_SUCCESS = {
  src: res1,
  text: '恭喜您，充值成功',
  info: '请耐心等待充值到账'
}
export const RESULT_FAIL = {
  src: res2,
  text: '抱歉，支付失败',
  info: '请检查后重新提交订单'
}
