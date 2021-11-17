<template>
  <div id="ground-item" :style="{left:positionLeft + 'px'}">
      <div class="grass-img"></div>
      <div class="ground-img"></div>
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
    positionLeft:{
        type:String,
        default:'0',
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
#ground-item{
    position: absolute;
    bottom: 120px;

}
.grass-img{
    background-image: url('../../../assets/main/ground/grass.png');    height: 23px;
    width: 300px;
}
.ground-img{
    background-image: url('../../../assets/main/ground/ground.png');    height: 60px;
    width: 300px;
}
</style>
