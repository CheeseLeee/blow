<template>
  <div id="sandBox" :style="{left:positionLeft + 'px'}">
      <img v-if="type === '1'" src="../../../assets/main/sea/sh1.png" />
      <img v-if="type === '2' " src="../../../assets/main/sea/sh2.png" />
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
#sandBox{
    position: absolute;
    left: 20px;
    top: 0;
}
</style>
