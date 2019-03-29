<template>
  <div class="center">
    <cube-input
      class="user"
      v-model="accountNotes"
      :placeholder="placeholder"
      :clearable="clearable">
      <img class="usericon" slot="append" :src="user" alt="">
    </cube-input>
    <p class="title center-title">账户充值</p>
    <div class="stand-con">
      <ul class="stand flex flex-direction_row justify-content_flex-center align-items_center flex-wrap text-center">
        <li class="flex flex-direction_column align-items_center vux-1px"
          :class="item.check ? 'active': ''"
          v-for="(item, index) in moneylist" :key="index" @click="moneyType(item)">
          <p>{{item.type}}元</p>
          <span v-text="item.money"></span>
          <i class="currenticon"></i>
        </li>
      </ul>
    </div>
    <cube-scroll
      v-if="navShow"
      ref="scroll"
      direction="horizontal"
      class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper subhead" ref="items">
        <li v-for="(list, i) in navlist" :key="list.id"
        class="list-item"
        :class="{'list-item-active': currentNav === i}"
        @click="navClick(i)">
        {{list.name}}</li>
      </ul>
    </cube-scroll>
    <div class="radio2-con">
      <p class="title">自定充值</p>
      <h1 class="money">¥ <span v-text="currentMoney"></span></h1>
      <div class="area">
        <cube-textarea v-model="remarks" placeholder="请填写您的备注信息"></cube-textarea>
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
      channelId: 2,
      currentNav: 0,
      currentMoney: 0,
      money: 0,
      user: USER,
      accountNotes: '', // 账号
      remarks: '', // 备注
      placeholder: '请填写您的账户ID',
      clearable: {
        visible: true,
        blurHidden: false
      },
      navShow: true,
      navlist: [
        {id: 1, name: '欢乐麻将'},
        {id: 2, name: '火拼双扣'},
        {id: 3, name: '斗地主'},
        {id: 4, name: '炸金花'},
        {id: 5, name: '消消乐'},
        {id: 6, name: '中国象棋'}
      ],
      moneylist: [
        {
          type: 10,
          money: '售价234.00元',
          check: false
        }, {
          type: 20,
          money: '售价234.00元',
          check: true
        }, {
          type: 30,
          money: '售价234.00元',
          check: false
        }, {
          type: 40,
          money: '售价234.00元',
          check: false
        }, {
          type: 50,
          money: '售价234.00元',
          check: false
        }, {
          type: 60,
          money: '售价234.00元',
          check: false
        }
      ]
    }
  },

  watch: {
    currentNav (newVal) {
      this.currentNav = newVal
      this.adjust()
    },
    currentMoney (newVal) {
      console.log(newVal)
      this.currentMoney = newVal
    }
  },
  mounted () {
    this.moneylist.map(item => {
      if (item.check) {
        this.currentMoney = item.type
      }
    })
    if (this.currentNav) {
      // waiting panels loaded
      this.$nextTick(() => {
        this.adjust()
      })
    }
  },
  methods: {
    navClick (val) {
      this.currentNav = val
    },
    moneyType (e) {
      this.currentMoney = e.type
      this.moneylist.map(item => {
        item.check = false
      })
      e.check = true
    },
    nextFn () {
      // setTimeout(() => {
      //   toast.hide()
      //   this.$router.push('/pay')
      // }, 1000)
    },
    adjust () {
      // waiting ui
      this.$nextTick(() => {
        const isHorizontal = true
        const targetProp = isHorizontal ? 'clientWidth' : 'clientHeight'
        const active = this.currentNav
        const viewportSize = this.$refs.scroll.$el[targetProp]
        const itemsEle = this.$refs.items
        const scrollerSize = itemsEle[targetProp]
        const minTranslate = Math.min(0, viewportSize - scrollerSize)
        const middleTranslate = viewportSize / 2
        const items = itemsEle.children
        let size = 0
        this.navlist.every((label, index) => {
          if (index === active) {
            size += (items[index][targetProp] / 2)
            return false
          }
          size += items[index][targetProp]
          return true
        })
        let translate = middleTranslate - size
        translate = Math.max(minTranslate, Math.min(0, translate))
        this.$refs.scroll.scrollTo(isHorizontal ? translate : 0, isHorizontal ? 0 : translate, 300)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/1px.less';
</style>
<style lang="stylus" rel="stylesheet/stylus">
.horizontal-scroll-list-wrap
  font-size:0
  border-radius: 5px
  .cube-scroll-content
    display: inline-block
    .cube-scroll-list-wrapper
      height:47px
      width: calc(100% + 1px)
  .list-wrapper
    white-space: nowrap
  .list-item
    height:46px
    line-height:46px
    display: inline-block
    box-sizing: border-box
    padding:0 15px
    background:#fff
    margin-left:5px
    position:relative
    border-radius :2px
  .list-item-active
    color:#FF5A41
    &::before
      content: " "
      position: absolute
      left: 0
      top: 0
      width: 200%
      border: 1px solid #FF5A41
      border-radius: 2px
      color: #FF5A41
      height: 200%
      transform-origin: left top
      transform: scale(0.5)
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
    padding:10px 5px;
    margin:2%;
    width:26%;
    position:relative;

  }
  .stand li.active::after{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    border: 0.026667rem solid #FF5A41;
    color: #FF5A41;
    height: 200%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    border-radius: 3px;
  }
  .stand li.active .currenticon{
    display:block;
    background-image:url("../assets/images/jiao.png");
    background-repeat: no-repeat;
    background-size:100%;
    width:100%;
    height:100%;
    position: absolute;
    right:0;
    bottom:0;
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  .stand li.active>p,.stand li.active>span{
    color:#FF5A41;
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
