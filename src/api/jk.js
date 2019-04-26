const host = process.env.host
console.log(process.env)
const jk = {
  'query': host+'/third/pay/admin/query', // 第三方支付类型
  'info': host+'/order/query/info', // 查询充值信息
  'insert': host+'/order/insert', // 添加待支付订单
  'repayment': host+'/order/create/charge/repayment', // 微信支付
  'code': host+'/order/pay/code' // 支付宝/微信扫码付款
}
export default jk
