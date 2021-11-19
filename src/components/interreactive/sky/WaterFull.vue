<template>
  <div id="waterfull" :style="{left:positionLeft + 'px'}">
      <div class="ground-left">

      </div>
      <div class="water"> </div>
      <div  class="ground-right">
          <div class="ground-top"></div>
          <div class="ground"></div>
      </div>
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
      positionLeft:{
          type:String,
          default:'650'
      }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
#waterfull{
    position: absolute;
    top:-1500px;
    display: flex;
    height: 1500px;
    overflow: hidden;
}
.water{
    width: 700px;
    height: 3000px;
     background-image: url('../../../assets/main/sky/water1.png');
     animation: waterFall 3s infinite;
}
@keyframes waterFall {
    0% {transform: translateY(0);}
    25% {transform: translateY(200px);}
    50% {transform: translateY(400px);}
    75% {transform: translateY(600px);}
    100% {transform: translateY(800px);}
}
.ground-left{
    background-image: url('../../../assets/main/sky/ground.png');
    width: 150px;
    height: 1500px;
    position: relative;
}
.ground-top{

    height: 50px;
    width: 150px;
    background-color: green;
}
.ground-right{
    height: 1500px;
}
.ground{
    background-image: url('../../../assets/main/sky/ground.png');
    width: 150px;
    height: 1450px;
}
</style>
