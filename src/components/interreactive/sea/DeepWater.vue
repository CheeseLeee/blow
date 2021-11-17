<template>
  <div id="deepWater" :style="{left:positionLeft + 'px'}">
      <img v-if="type === '1'" src="../../../assets/main/sea/bg1.png" />
      <img v-if="type === '2'"  src="../../../assets/main/sea/bg2.png" />
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
      type:{
          type:String
      },
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
#deepWater{
    position: absolute;
    
}
</style>
