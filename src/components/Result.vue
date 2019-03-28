<template>
  <div class="result">
    <div class="res-con">
      <img class="res-img" :src="result.src" alt="">
      <h1 class="res-text" v-text="result.text"></h1>
      <p class="res-info" v-text="result.info"></p>
    </div>
    <m-button @click.native="payFn">返回首页</m-button>
  </div>
</template>

<script>
import { RESULT_SUCCESS, RESULT_FAIL } from './meta.js'
export default {
  name: 'Result',
  data () {
    return {
      type1: RESULT_SUCCESS,
      type2: RESULT_FAIL,
      result: ''
    }
  },
  mounted () {
    const type = this.$route.query.type
    type ? this.result = RESULT_SUCCESS : this.result = RESULT_FAIL
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .res-con
    padding:30px 0
    font-size: 16px
    text-align:center
    .res-img
      width: 46%
      margin: 10% auto
    .res-text
      color: #FF5A41
      padding:15px 0
    .res-info
      color:#9B9B9B
</style>
