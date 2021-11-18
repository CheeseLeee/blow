<template>
  <div id="box" :style="{bottom:positionBottom + 'px' ,left:positionLeft + 'px'}">
      <div v-if="type === '1' " class="box1"></div>
      <div class="box2" v-if="type === '2'">
          <div class="floor-box"></div>
          <div class="box-bottom"></div>
      </div>
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
    positionBottom:{
          type:String,
          default:'170'
      },
    positionLeft:{
        type:String
      },
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
.box2{
    width: 400px;
    height: 150px;
}
.box-bottom{
    width: 100%;
    height: 100px;
     background-image: url('../../../assets/main/mechanical/box.png');
}
.floor-box{
    width: 100%;
    height: 50px;
     background-image: url('../../../assets/main/mechanical/floor.png');
}
#box{
    position: absolute;
    z-index: 20;;
}
.box1{
    width: 700px;
    height: 100px;
    background-image: url('../../../assets/main/mechanical/box.png');
}
</style>
