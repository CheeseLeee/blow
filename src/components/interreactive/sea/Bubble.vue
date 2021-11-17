<template>
  <div id="bulle" :style="{left:positionLeft + 'px'}">
      <img src="../../../assets/main/sea/qp.png" />
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
      positionLeft:{
          type:String
      }
  },
  setup() {
    
    return {}
  }
}
</script>

<style scoped >
#bulle{
    position: absolute;
    top: calc(100vh - -100px)

}
</style>
