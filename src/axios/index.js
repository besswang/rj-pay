import axios from 'axios'
import qs from 'qs'
let axiosIns = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'Content-Type': 'application/json'
  }
})
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.responseType = 'json'

axiosIns.defaults.transformRequest = [function (data) {
  // 数据序列化
  // return JSON.stringify(data)
  return qs.stringify(data)
}]
axiosIns.defaults.validateStatus = function (status) {
  return true
}
axiosIns.interceptors.request.use(function (config) {
  // 配置config
  // config.headers.Accept = 'application/json'
  // config.headers.Accept = 'application/x-www-form-urlencoded'
  return config
})
axiosIns.interceptors.response.use(function (response) {
  let status = response.status
  if (status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
})

let ajaxMethod = ['get', 'post']
let api = {}
ajaxMethod.forEach((method) => {
  // 数组取值的两种方式
  api[method] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config).then((response) => {
        /* 根据后台数据进行处理
         *1 code===200   正常数据+错误数据     code!==200   网络异常等
         *2 code===200   正常数据     code!==200   错误数据+网络异常等
         * 这里使用的是第一种方式
         * ......
         */
        // console.log(response)
        if (response.data.code === 'SUCCESS') {
          resolve(response.data)
          // Message({
          //   message: response.data.remark,
          //   type: 'warning'
          // })
          // setTimeout(() => {
          //   window.location.href = process.env.businessHost.host + '/' + process.env.businessHost.projectName + '/#/login'
          // }, 3000)
          // toast封装：  参考ele-mint-ui
          // Toast({
          //     message: response.data.Message,
          //     position: 'top',
          //     duration: 2000
          // })
          // if (response.data.Message === '未登录') {
          //     Toast({
          //         message: response.data.Message,
          //         position: '',
          //         duration: 2000
          //     })
          //     //使用vue实例做出对应行为  change state or router
          //     //instance.$store.commit('isLoginShow',true)
          // }
        } else {
          resolve(response)
        }
      }).catch(response => {
        reject(response)
      })
    })
  }
})
export default api
