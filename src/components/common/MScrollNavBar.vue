<template>
  <div class="button">
    <cube-button class="selfbtn" primary>
      <slot>{{ text }}</slot>
    </cube-button>
  </div>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    text: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selfbtn{
  width: 90%;
  margin: 30px auto 0 auto;
  border-radius: 8px;
  font-size: 20px;
}
</style>
