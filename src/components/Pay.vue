<template>
  <div class="pay">
    <div class="radio2-con">
      <p class="title">订单金额</p>
      <h1 class="money">¥ 678</h1>
    </div>
    <div class="radio2-con">
      <h1 class="title border-bottom-1px">充值方式</h1>
      <cube-radio-group v-model="current">
        <cube-radio
          v-for="(option, index) in paylist"
          position="right"
          :key="index"
          :option="option">
          <img class="type-img" :src="option.src" />
          <p class="subhead" v-text="option.label"></p>
        </cube-radio>
      </cube-radio-group>
    </div>
    <m-button @click.native="payFn">确认支付</m-button>
    <p class="tint">点击确认支付即表示已经同意<router-link to="/agreement" class="theme-color">《充值协议》</router-link></p>
  </div>
</template>

<script>
import { PAY_LIST } from './meta.js'
export default {
  name: 'Pay',
  data () {
    return {
      current: 2,
      paylist: PAY_LIST
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
    this.axios.post('/api/third/pay/query').then((response) => {
      console.log(response)
    }).catch(err => {
      console.log('err')
      console.log(err)
    })
    // this.$axios.get('https://api.github.com/users/octocat/gists').then((response) => {
    //   console.log(response)
    // })
  },
  methods: {
    payFn () {
      console.log(this.current)
      const toast = this.$createToast({
        txt: 'Loading...',
        time: 10000,
        mask: true,
        onTimeout: () => {
          console.log('Timeout')
        }
      })
      toast.show()
      setTimeout(() => {
        toast.hide()
        this.$router.push({
          path: '/result',
          query: {
            type: true
          }
        })
      }, 1000)
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
</style>
