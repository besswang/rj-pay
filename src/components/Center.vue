<template>
  <div class="center">

      <cube-input
      class="user"
        v-model="value"
        :placeholder="placeholder"
        :clearable="clearable">
        <img class="usericon" slot="append" :src="user" alt="">
      </cube-input>

    <p class="title center-title">账户充值</p>
    <div class="stand-con">
      <ul class="stand flex flex-direction_row align-items_center flex-wrap text-center">
        <li class="flex flex-direction_column justify-content_flex-center align-items_center
        border-top-1px border-right-1px border-bottom-1px border-left-1px"
          v-for="(item, index) in moneylist" :key="index">
          <p v-text="item.type"></p>
          <span v-text="item.money"></span>
        </li>
      </ul>
    </div>
    <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
    <div class="radio2-con">
      <p class="title">自定充值</p>
      <h1 class="money">¥ 678</h1>
      <div class="area">
        <cube-textarea v-model="value" placeholder="请填写您的备注信息"></cube-textarea>
      </div>
    </div>

    <m-button @click.native="nextFn">下一步</m-button>
  </div>
</template>

<script>
import MInput from './common/MInput.vue'
import { USER } from './meta.js'
export default {
  name: 'Center',
  components: {
    MInput: MInput
  },
  data () {
    return {
      user: USER,
      value: '',
      placeholder: '请填写您的账户ID',
      clearable: {
        visible: true,
        blurHidden: false
      },
      navlist: [
        {id: 1, name: '欢乐麻将'},
        {id: 2, name: '火拼双扣'},
        {id: 3, name: '斗地主'},
        {id: 4, name: '炸金花'}
      ],
      current: '欢乐麻将',
      labels: ['欢乐麻将', '火拼双扣', '斗地主', '炸金花', '中国象棋'],
      moneylist: [
        {
          type: '10元',
          money: '售价234.00元'
        }, {
          type: '10元',
          money: '售价234.00元'
        }, {
          type: '10元',
          money: '售价234.00元'
        }, {
          type: '10元',
          money: '售价234.00元'
        }, {
          type: '10元',
          money: '售价234.00元'
        }
      ]
    }
  },
  methods: {
    nextFn () {
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
        this.$router.push('/pay')
      }, 1000)
    },
    changeHandler (cur) {
      this.current = cur
      console.log(cur)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/1px.less';
</style>
<style scoped>
  .usericon{
    width:30px;
    height:30px;
  }
  .money{
    font-size:32px;
    padding:0 0.426667rem;
  }
  .area{
    background:#F8F8F8;
    color:#9B9B9B;
    margin:.4rem .426667rem 0 .426667rem;
  }
  .stand-con{
    background:#fff;
    padding:0 12px 15px 12px;
    margin-bottom:0.213333rem;
  }
  .stand li{
    border-radius: 3px;
    margin:4px;
    padding:8px 5px;
    width:28%;
  }
  .stand li.active{
    border:none;
    background:url("../assets/images/border.png") no-repeat;
    background-size:contain;
  }
  .stand li>p{
    font-size:18px;
    color:#4A4A4A;
  }
  .stand li>span{
    font-size:12px;
    color:#9B9B9B;
    padding-top:5px;
  }
  .center-title{
    background:#fff;
    padding-top:15px;
  }
  .user{
    background:#fff;
    padding:20px 15px 0 .213333rem;
  }
</style>
