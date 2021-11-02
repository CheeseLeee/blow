<template>
  <div class="loading">
    <div class="loading-text">
      我在加载呢
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
.loading{
  width: 100%;
  height: 100%;
    position: fixed;
    top: 0;left: 0;
    background-color: rgba(0, 0, 0, .6);
}
.loading-text{
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%);
  color:red;
}
</style>
