// const businessHost = process.env.businessHost && process.env.businessHost.url
const jk = {
  'query': '/third/pay/admin/query', // 第三方支付类型
  'info': '/order/query/info', // 查询充值信息
  'insert': '/order/insert', // 添加待支付订单
  'repayment': '/order/create/charge/repayment', // 微信支付
  'code': '/order/pay/code' // 支付宝/微信扫码付款
}
export default jk
