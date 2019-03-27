<template>
  <div class="minput-con flex flex-direction_row justify-content_flex-center align-items_center">
    <input
      class="minput flex_1"
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="type"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander"
    >
    <i class="cubeic-wrong clear-icon"></i>
    <slot v-if="$slots.append" name="append"></slot>
  </div>
</template>

<script>
const EVENT_CHANGE = 'change'
const EVENT_BLUR = 'blur'
const EVENT_FOCUS = 'focus'
export default {
  name: 'MButton',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String
  },
  data () {
    return {
      inputValue: this.value,
      isFocus: false
    }
  },
  methods: {
    changeHander (e) {
      this.$emit(EVENT_CHANGE, e)
    },
    handleFocus (e) {
      this.$emit(EVENT_FOCUS, e)
      this.isFocus = true
    },
    handleBlur (e) {
      this.$emit(EVENT_BLUR, e)
      this.isFocus = false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .minput-con{
    background:#fff;
  }
  .minput{
    display: block;
    width: 100%;
    padding: 0.266667rem;
    box-sizing: border-box;
    color: #666;
    line-height: inherit;
    background-color: inherit;
    border-radius: 0.053333rem;
    outline: none;
    font-size:14px;
  }
  .clear-icon{
    font-size:18px;
    color:#999;
  }
</style>
