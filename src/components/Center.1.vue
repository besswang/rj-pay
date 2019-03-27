<template>
  <div class="hello">
    <cube-input
      v-model="value"
      :placeholder="placeholder"
      :clearable="clearable"
    >
    <img slot="append" src="../assets/images/user.png" alt="">
    </cube-input>
    <!-- <cube-button @click.stop.prevent="payFn" class="selfbtn" primary>确认支付</cube-button> -->
    <m-button @click.native="nextFn">下一步</m-button>
    <m-input
      v-model="value"
      :placeholder="placeholder"
    >
    <img class="usericon" slot="append" :src="user" alt="">
    </m-input>
    <!-- <cube-button @click="showToast">show toast</cube-button> -->
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
      placeholder: '请输入内容',
      clearable: {
        visible: true,
        blurHidden: true
      }
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
    }
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
  .usericon{
    width:30px;
    height:30px;
  }
</style>
