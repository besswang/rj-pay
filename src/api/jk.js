// const businessHost = process.env.businessHost && process.env.businessHost.url
const jk = {
  'query': '/api/third/pay/admin/query', // 第三方支付类型
  'info': '/api/order/query/info', // 查询充值信息
  'insert': '/api/order/insert', // 添加待支付订单
  'repayment': '/api/order/create/charge/repayment', // 微信支付
  'code': '/api/order/pay/code' // 支付宝/微信扫码付款
}
export default jk
