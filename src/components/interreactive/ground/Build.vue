<template>
  <div id="build" :style="{left:positionLeft + 'px'}">
      <img v-if="type === 'a'" src="../../../assets/main/ground/building-a.png" />
      <img v-if="type === 'b'"  src="../../../assets/main/ground/building-b.png" />
      <img v-if="type === 'c'"  src="../../../assets/main/ground/building-c.png" />
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
      positionLeft:{
          type:String,
          defualt:'0'
      },
      type:{
          type:String,
          require:true
      }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
#build{
    position: absolute;
    bottom: 85px;
}
</style>
