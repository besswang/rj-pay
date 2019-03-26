<template>
  <div class="hello">
    <div>
      <p>订单金额</p>
      <h1>¥ 678</h1>
    </div>
    <h1 class="border-bottom-1px">充值方式</h1>
    <cube-radio-group>
      <cube-radio
        v-for="(option, index) in options4"
        position="right"
        :key="index"
        :option="option"
        v-model="selected4">
        <img :src="option.src" />
        <p v-text="option.label"></p>
      </cube-radio>
    </cube-radio-group>
    <cube-button>确认支付</cube-button>
    <p>点击确认支付即表示已经同意<router-link to="/agreement">《充值协议》</router-link></p>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width:50px;
  height:50px;
  display:block;
}
</style>
