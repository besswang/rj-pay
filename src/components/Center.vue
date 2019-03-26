<template>
  <div class="hello">
    <div class="radio2-con">
      <p class="title">订单金额</p>
      <h1 class="money">¥ 678</h1>
    </div>
    <div class="radio2-con">
      <h1 class="title border-bottom-1px">充值方式</h1>
      <cube-radio-group>
        <cube-radio
          v-for="(option, index) in options4"
          position="right"
          :key="index"
          :option="option"
          v-model="selected4">
          <img class="type-img" :src="option.src" />
          <p class="subhead" v-text="option.label"></p>
        </cube-radio>
      </cube-radio-group>
    </div>
    <cube-button class="selfbtn" primary>确认支付</cube-button>
    <p class="tint">点击确认支付即表示已经同意<router-link to="/agreement" class="theme-color">《充值协议》</router-link></p>
    <!-- <cube-button @click="showToast">show toast</cube-button> -->
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      selected4: '1',
      options4: [
        {
          label: '1111',
          value: '1',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
        },
        {
          label: '2222',
          value: '2',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
        }
      ]
    }
  },
  methods: {
    // showToast () {
    //   this.$createToast({
    //     txt: this.toastTxt
    //   }).show()
    // }
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
.selfbtn{
  width: 90%;
  margin: 30px auto 0 auto;
  border-radius: 8px;
  font-size: 20px;
}
</style>
