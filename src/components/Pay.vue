<template>
  <div class="pay">
    <!-- https://www.pingxx.com/docs/overview/account/orders/order_createNpay?account=true -->
    <div class="radio2-con">
      <p class="title">订单金额</p>
      <h1 class="money">¥ <span v-text="money"></span></h1>
    </div>
    <div class="radio2-con">
      <h1 class="title border-bottom-1px">充值方式</h1>
      <cube-radio-group v-model="current">
        <cube-radio
          v-for="option in paylist"
          position="right"
          :key="option.id"
          :option="option">
          <img class="type-img" :src="option.src" />
          <p class="subhead" v-text="option.name"></p>
        </cube-radio>
      </cube-radio-group>
    </div>
    <m-button @click.native="payFn('myPopup')">确认支付</m-button>
    <p class="tint">点击确认支付即表示已经同意<router-link to="/agreement" class="theme-color">《充值协议》</router-link></p>
    <cube-popup type="my-popup" ref="myPopup"
    :mask-closable="true">
    <slot>
      <vue-qr class="qrcode" :text="codeValue" :size="200" :margin="0"></vue-qr>
    </slot>
    </cube-popup>
  </div>
</template>

<script>
import { PAY_LIST } from './meta.js'
import pingpp from 'pingpp-js'
// https://github.com/Binaryify/vue-qr
import VueQr from 'vue-qr'
export default {
  name: 'Pay',
  components: { VueQr },
  data () {
    return {
      codeValue: '',
      money: 0,
      orderId: 0,
      current: 2,
      paylist: []
      // paylist: PAY_LIST
    }
  },
  mounted () {
// https://blog.csdn.net/qq_41115965/article/details/80780264

    // Vue.axios.get('/api/get', {
    //   // get传递的query参数（传递的参数应与后台人员协商，本次模拟不做限制，不做判断）
    //   params: {
    //     name: '嬴政',
    //     age: 45
    //   }
    // }).then((response) => {
    //   // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
    //   console.log(response);
    // }).catch((error) => {
    //   // catch 指请求出错的处理
    //   console.log(error);
    // });
    // this.axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 此处是增加的代码，设置请求头的类型
    // this.axios.get('https://api.github.com/users/octocat/gists').then((response) => {
    //   // console.log(response.data)
    // })
    this.money = this.$route.query.money
    this.orderId = this.$route.query.orderId
    this.$axios.post(this.$jk.query).then((res) => {
      let data = res.data
      let trans = []
      for (let i = 0; i < data.length; i++) {
        data[i]['src'] = PAY_LIST[i].src
        data[i]['value'] = PAY_LIST[i].value
        trans.push(data[i])
      }
      this.paylist = trans
      t.hide()
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    payFn (refId) {
      console.log(this.current)
      if (this.current === 1) { // 微信付款
        this.$axios.post(this.$jk.repayment, {orderId: this.orderId, thirdPayType: 'WX'}).then((res) => {
          pingpp.createPayment(res.data, function (result, err) {
            // object 需是 Charge/Order/Recharge 的 JSON 字符串
            // 可按需使用 alert 方法弹出 log
            // console.log(JSON.stringify(object))
            console.log('result:' + result)
            console.log('err.msg:' + err.msg)
            console.log('err.extra:' + err.extra)
            if (result === 'success') {
              // 只有微信JSAPI (wx_pub)、微信小程序（wx_lite）、QQ 公众号 (qpay_pub)、支付宝小程序（alipay_lite）支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL
            } else if (result === 'fail') {
              // Ping++ 对象 object 不正确或者微信JSAPI/微信小程序/QQ公众号支付失败时会在此处返回
            } else if (result === 'cancel') {
              // 微信JSAPI、微信小程序、QQ 公众号、支付宝小程序支付取消支付
            }
          })
        }).catch(err => {
          console.log(err)
        })
      } else {
        let type = ''
        if (this.current === 2) {
          type = 'AILI_PAY'
        } else {
          type = 'WX'
        }
        console.log(type)
        const popup = this.$refs[refId]
        this.$axios.post(this.$jk.code, {orderId: this.orderId, thirdPayType: type}).then((res) => {
          this.codeValue = res.data
          /* global t */
          t.hide()
          popup.show()
        }).catch(err => {
          console.log(err)
        })
      }
      // setTimeout(() => {
      //   toast.hide()
      //   this.$router.push({
      //     path: '/result',
      //     query: {
      //       type: true
      //     }
      //   })
      // }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.money{
  font-size:24px;
  padding:0 0.426667rem;
}
.type-img{
  width:34px;
  height:34px;
  display:block;
  margin-right:10px;
}
.qrcode{
  border:5px solid #fff;
}
</style>
